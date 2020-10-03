const path = require("path");

/**
 * Return a full (absolute) path to file in datafiles directory
 * @param {string} f - filename
 */
const apath = (f) => path.join(__dirname, "..", "datafiles", path.basename(f));

module.exports = { apath };
