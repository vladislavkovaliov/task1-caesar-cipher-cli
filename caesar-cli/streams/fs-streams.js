const { createReadStream, createWriteStream } = require("fs");
const { isReadableFile, isWritableFile } = require("../utils/file-check");

const inputStream = (filename, encoding = "utf-8") => {
  if (filename && typeof filename === "string" && isReadableFile(filename)) {
    // TODO: Check if is not readable file - Show Error & Exit
    return createReadStream(filename).setEncoding(encoding);
  } else {
    // TODO: check for typeof(filename) !== 'string' (maybe it be useful?)
    return process.stdin.setEncoding(encoding);
  }
};

const outputStream = (filename, encoding = "utf-8") => {
  if (filename && typeof filename === "string" && isWritableFile(filename)) {
    // TODO: Check if is not readable file - Show Error & Exit
    return createWriteStream(filename, { flags: "a", encoding });
  } else {
    // TODO: check for typeof(filename) !== 'string' (maybe it be useful?)
    return process.stdout;
  }
};

module.exports = { inputStream, outputStream };
