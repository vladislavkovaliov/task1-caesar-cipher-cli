const yargs = require("yargs");
const pjson = require("./package.json");
const path = require("path");
const { promisify } = require("util");

const { inputStream, outputStream } = require("./streams/fs-streams");
const { CaesarTransform } = require("./streams/caesar-transform");
const { pipeline } = promisify(require("stream"));

yargs
  .usage("Usage: $0 options")
  .example([
    [
      "$0 --shift=7 --action=encode",
      "Encode data from stdin with shift 7 and print result to stdout",
    ],
    [
      "$0 -s 2 -a decode -i topsecret.txt",
      "Decode topsecret.txt with shift 2 and print result to stdout",
    ],
  ])
  .version(pjson.version)
  .option("shift", {
    alias: "s",
    demandOption: true,
    describe: "Set the shift for decode/encode data",
    requiresArg: true,
    type: "number",
  })
  .option("action", {
    alias: "a",
    choices: ["encode", "decode"],
    demandOption: true,
    describe: "Specify what action you want to perform",
    requiresArg: true,
  })
  .option("input", {
    alias: "i",
    demandOption: false,
    describe: "Specify the file where to get the data from",
    normalize: true,
    requiresArg: true,
    type: "string",
  })
  .option("output", {
    alias: "o",
    demandOption: false,
    describe: "Specify the file to save the data to",
    normalize: true,
    requiresArg: true,
    type: "string",
  })
  .help("help")
  .locale("en")
  .alias("help", "h")
  .wrap(yargs.terminalWidth())
  .epilog("(c) 2020 Marat Maksumov")
  .scriptName(`node ${path.basename(__filename)}`)
  .parse(process.argv, {}, (err, argv, output) => {
    console.log("argv :>> ", argv);
    console.log("------------------------ ");
    if (err !== null) {
      console.error("Ошибка! :>> ");
      console.log("argv :>> ", err);
      console.log("------------------------ ");
      process.exitCode = -1;
    }
  });

const { input, output, action, shift } = yargs.argv;

async function run() {
  // TODO: check typeof of shift (typeof(shift) === 'number'?)
  const correctedShift = action === "encode" ? shift : -shift;

  await pipeline(
    inputStream(input),
    new CaesarTransform(shift, { decodeStrings: false }),
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
