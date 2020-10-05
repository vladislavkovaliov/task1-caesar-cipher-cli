const fs = require("fs");

// File access constants are from here: https://nodejs.org/api/fs.html#fs_file_access_constants
const VISIBLE = fs.constants.F_OK;
const READABLE = fs.constants.R_OK;
const WRITABLE = fs.constants.W_OK;

/**
 * Check safely if path is accessible
 * @param {string} path - Path to file or directory
 * @param {number} mode - Access mode
 */
const isAccessible = (path, mode) => {
  try {
    if (fs.accessSync(path, mode) === undefined) {
      return true;
    }
  } catch (err) {
    // Do nothing. This is just meaning that path isn't accessible
  }
  return false;
};

/**
 * Check safely if path is file
 * @param {string} path
 */
const isFile = (path) => fs.existsSync(path) && fs.statSync(path).isFile();

/**
 * Check if path is correct file (is file & accessible)
 * @param {string} path - Path to file or directory
 * @param {number} mode - Access mode
 */
const isCorrectFile = (path, mode) => isFile(path) && isAccessible(path, mode);

/**
 * Return info about path: existence, is path file or not, access permissions
 * @param {string} path - Path to file or directory
 */
const pathInfo = (path) => ({
  exists: fs.existsSync(path),
  isFile: isFile(path),
  readable: isAccessible(path, READABLE),
  writable: isAccessible(path, WRITABLE),
});

/**
 * Check if path is readable file
 * @param {string} path - Path to file
 */
const isReadableFile = (path) => isCorrectFile(path, READABLE);

/**
 * Check if path is readable file
 * @param {string} path - Path to file
 */
const isWritableFile = (path) => isCorrectFile(path, WRITABLE);

module.exports = { pathInfo, isReadableFile, isWritableFile };
