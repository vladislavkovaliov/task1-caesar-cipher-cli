const { promisify } = require("util");

const { inputStream, outputStream } = require("./streams/fs-streams");
const { CaesarTransform } = require("./streams/caesar-transform");
const { pipeline } = promisify(require("stream"));

const { input, output, action, shift } = require("./utils/args-parser");

async function run() {
  // TODO: check typeof of shift (typeof(shift) === 'number'?)
  const correctedShift = action === "encode" ? shift : -shift;

  await pipeline(
    inputStream(input),
    new CaesarTransform(correctedShift, { decodeStrings: false }),
    outputStream(output),
    (err) => {
      if (err) {
        console.error("Error: ", err);
        process.exitCode = -1;
      }
    }
  );
}

run().catch(console.error);
