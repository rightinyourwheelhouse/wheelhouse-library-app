import { invertedClamp as clamp } from './clamp';

/**
 * Generates a hashCode from a string
 * Source: https://stackoverflow.com/a/7616484
 * @param  {String} input A String value to be hashed
 * @return {String}       The hash-string for the given input
 */
export default (input) => {
  let hash = 0;

  if (input.length === 0) return hash;

  // Turn string into array of chars and loop over it eloquently
  [...input].forEach((char) => {
    // Get the character code for the currently iterated char
    const chr = char.charCodeAt(0);

    // Hashing magic happens here, shift previous character code 5 bits left
    // Then add new character to that, this makes up the hash
    hash = ((hash << 5) - hash) + chr; // eslint-disable-line no-bitwise

    // Finally convert it to 32bit integer
    hash |= 0; // eslint-disable-line no-bitwise
  });

  return Math.abs(hash);
};

/**
 * Will desaturate color slightly if needed
 * This desaturation ensures good contrast with a white text
 * @param  {String} hexColor Hex string of a color
 * @return {String}          Desaturated hex string if that was needed
 */
export function clampColorLightness(hexColor) {
  let r = parseInt(hexColor.substring(0,1), 16);
  let g = parseInt(hexColor.substring(2,3), 16);
  let b = parseInt(hexColor.substring(4,5), 16);

  [r, g, b].forEach((component) => {
    if (component >= 13) {
      const difference = 16 - component;
      r = clamp(r - difference, 0);
      g = clamp(g - difference, 0);
      b = clamp(b - difference, 0);
    }
  });

  // Turn back into hex string
  return [r.toString(16), g.toString(16), b.toString(16)].join('');
}

/**
 * Converts a hashcode to a hexCode color
 * @param  {String} hashCode Any alphanumeric string you want to convert to color
 * @return {String}          Hex code RGB which can be used with CSS
 */
export function getColorFromHashCode(hashCode) {
  let hexCode = hashCode.toString(16).substring(0, 6);
  hexCode = clampColorLightness(hexCode);
  return `#${hexCode}`;
}
