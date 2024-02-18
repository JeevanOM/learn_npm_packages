const createCamelCase = (sentence) =>
  sentence
    .split(' ')
    .map((word) => {
      let first_char = word.charAt(0);
      // slice(start, ?end) if no end given, then takes till the last
      let other_chars = word.slice(1);
      return `${first_char.toUpperCase()}${other_chars}`;
    })
    .join(' ');

export default createCamelCase;
