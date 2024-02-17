/*
  createCamelCase Method
  * This method converts a sentence to a camel case string.
  ? @Jagat - Is this a test util or we have any use case for this method.
*/
const createCamelCase = (sentence) =>
  sentence
    .split(' ')
    .map((word, index) => {
      if (index !== 0) {
        let first_char = word.charAt(0);
        // slice(start, ?end) if no end given, then takes till the last
        let other_chars = word.slice(1);
        return `${first_char.toUpperCase()}${other_chars}`;
      }
      return `${word}`;
    })
    .join('');

export default createCamelCase;
