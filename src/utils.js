export function pointsForWord(word) {
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }
  if (!/^[A-Za-z]*$/.test(word)) {
    throw new Error('Input must only contain alphabetic characters');
  }
  
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}

  
  
