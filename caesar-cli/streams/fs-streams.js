const { createReadStream, createWriteStream } = require("fs");
const { errorHandler } = require("../utils/error-handler");
const { isReadableFile, isWritableFile } = require("../utils/file-check");

const inputStream = (filename, encoding = "utf-8") => {
  if (filename && typeof filename === "string") {
    if (isReadableFile(filename)) {
      return createReadStream(filename).setEncoding(encoding);
    } else {
      return errorHandler("FileSystem", `Can't read from ${filename}!`);
    }
  } else {
    // TODO: check for typeof(filename) !== 'string' (maybe it be useful?)
    return process.stdin.setEncoding(encoding);
  }
};

const outputStream = (filename, encoding = "utf-8") => {
  if (filename && typeof filename === "string") {
    if (isWritableFile(filename)) {
      return createWriteStream(filename, { flags: "a", encoding });
    } else {
      // Prevent creating non-existent file (and also prevent to write to inaccessible path)
      return errorHandler("FileSystem", `Can't write to ${filename}!`);
    }
  } else {
    // TODO: check for typeof(filename) !== 'string' (maybe it be useful?)
    return process.stdout;
  }
};

module.exports = { inputStream, outputStream };
