const uniqueChars = (string) => {
  const store = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (store[char]) {
      return false;
    }
    store[char] = char;
  }
  return true;
};

const uniqueCharsNoDS = (string) => {
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    for (let j = i; j < string.length; j++) {
      const comparedChar = string[j + 1];
      if (currentChar === comparedChar) {
        return false;
      }
    }
  }
  return true;
};

const reverseCString = (string) => {
  // Built in JS string methods
  // return string.split('').reverse().join('');
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    if (i !== string.length - 1) {
      reversedString = string[i] + reversedString;
    } else {
      reversedString = '\0' + reversedString;
    }
  }
  return reversedString;
};

const removeDupeChars = (string) => {
  // no additional buffers/storage
  // removes the duplicate characters from the end of the string
  if (string.length < 2) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    for (let j = i + 1; j < string.length; j++) {
      const comparedChar = string[j];
      if (currentChar === comparedChar) {
        string = string.slice(0, j) + string.slice(j + 1);
        j -= 1;
      }
    }
  }
  return string;
};

const areAnagrams = (stringA, stringB) => {
  const storeA = {};
  const storeB = {};

  const storeString = (str, store) => {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (store[char]) {
        store[char] += 1;
      } else {
        store[char] = 1;
      }
    }
  };

  const compareStores = (storeA, storeB) => {
    for (let prop in storeA) {
      if (storeA[prop] !== storeB[prop]) {
        return false;
      }
    }

    return true
  };

  storeString(stringA, storeA);
  storeString(stringB, storeB);

  return compareStores(storeA, storeB);
};

const bubbleSort = require('../sorts/bubbleSort');

const areAnagramsBySort = (strA, strB) => {
  return bubbleSort(strA) === bubbleSort(strB);
};

// TODO: finish
const replaceStrings = (str) => {
  // return str.replace(' ', '%20');
  let numSpaces = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      numSpaces += 1;
    }
  }

  return str;
};

module.exports = {
  uniqueChars,
  uniqueCharsNoDS,
  reverseCString,
  removeDupeChars,
  areAnagrams,
  areAnagramsBySort,
  replaceStrings
};