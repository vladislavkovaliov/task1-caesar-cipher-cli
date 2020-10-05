const yargs = require("yargs");
const pjson = require("../package.json");
const { errorHandler } = require("./error-handler");

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
  .scriptName("node caesar-cli")
  .parse(process.argv, {}, (err, argv, output) => {
    if (err !== null && typeof err === "object") {
      return errorHandler("ArgumentsParser", err.message);
    }
  });

module.exports = { ...yargs.argv };
