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
  .epilog(
    `N.B.: 1. If output file isn't exist it wouldn't be created. You can write output stream only to existing file.
      2. If --input option is omitted - STDIN is used as an input source. Use Ctrl+C for break input.
      3. If --output option is omitted - STDOUT is used as an output destination.
      4. --shift value can be negative and can exceed the size of the alphabet.
      5. Only English alphabet characters are encoded/decoded, all other characters will be kept intact.
      6. If --help is given the help is displayed and other options are ignored.
      7. If --version is given and --help is omitted the version of app is displayed and other options are ignored.

Values for options can be set like "--action encode" (whitespace separated) or "--action=encode" (= separated). It doesn't matter.`
  )
  .locale("en")
  .alias("help", "h")
  .wrap(yargs.terminalWidth())
  .scriptName("node caesar-cli")
  .parse(process.argv, {}, (err, argv, output) => {
    if (err !== null && typeof err === "object") {
      return errorHandler("ArgumentsParser", err.message);
    }
    if (isNaN(argv.shift)) {
      return errorHandler("ArgumentsParser", "Shift value must be number!!!");
    }
  });

module.exports = { ...yargs.argv };
