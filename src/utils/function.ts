/**
 * Truncates a text string if it exceeds the specified maximum length.
 *
 * @param {string} txt - The text to be shortened if it's too long.
 * @param {number} [max=40] - The maximum allowed length of the text before truncation.
 * @returns {string} The truncated text with an ellipsis (...) if it's longer than the max length, otherwise the original text.
 *
 * @example
 * txtSlicer("Hello, this is a long message!", 10);
 * // Returns: "Hello, thi ..."
 */

export function txtSlicer(txt: string, max: number = 35) {
  if (txt.length > max) return `${txt.slice(0, max)} ...`;
  return txt;
}
