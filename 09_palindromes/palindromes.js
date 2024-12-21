const palindromes = function (wordToCheck) {
  let cleanedWord = wordToCheck.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedWord = cleanedWord.split('').reverse().join('');

  return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
