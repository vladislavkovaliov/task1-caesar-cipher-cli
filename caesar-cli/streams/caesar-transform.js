const { Transform } = require("stream");

const BASE_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

/**
 * Return alphabet expanded with Upper case symbols
 * @param {string} alphabet
 */
const lowerAndUpper = (alphabet) =>
  alphabet.toLowerCase() + alphabet.toUpperCase();

/**
 * Return rotated alphabet
 * @param {string} alphabet - An alphabet to rotate
 * @param {number} shift - A negative or positive number for rotate alphabet to right or to left respectively
 */
const rotateAlphabet = (alphabet, shift) => {
  const normalizedShift = shift % alphabet.length;
  return alphabet.slice(normalizedShift) + alphabet.slice(0, normalizedShift);
};

/**
 * Class for converting the input stream using the Caesar encryption algorithm
 */
class CaesarTransform extends Transform {
  constructor(shift, options) {
    super({ ...options });
    this._searchPattern = lowerAndUpper(BASE_ALPHABET);
    this._resultPattern = lowerAndUpper(rotateAlphabet(BASE_ALPHABET, shift));
  }

  _transform(chunk, encoding, callback) {
    const symbols = chunk.split("");
    this.push(
      symbols
        .map((s) => {
          const idx = this._searchPattern.indexOf(s);
          return idx !== -1 ? this._resultPattern[idx] : s;
        })
        .join("")
    );
    callback();
  }

  _flush(callback) {
    this.push(this.tail);
    callback();
  }
}

module.exports = { CaesarTransform };
