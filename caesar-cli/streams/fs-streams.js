const { createReadStream, createWriteStream } = require("fs");
const { apath } = require("../utils/apath");

const inputStream = (filename, encoding = "utf-8") => {
  if (filename && typeof filename === "string") {
    return createReadStream(apath(filename)).setEncoding(encoding);
  } else {
    // TODO: check for typeof(filename) !== 'string' (maybe it be useful?)
    return process.stdin.setEncoding(encoding);
  }
};

const outputStream = (filename, encoding = "utf-8") => {
  if (filename && typeof filename === "string") {
    return createWriteStream(apath(filename), { flags: "a", encoding });
  } else {
    // TODO: check for typeof(filename) !== 'string' (maybe it be useful?)
    return process.stdout;
  }
};

module.exports = { inputStream, outputStream };
