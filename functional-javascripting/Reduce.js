function countWords(inputWords) {
  return inputWords.reduce( function ( result, word ) {
    if( result[word] ) {
      result[word] = result[word] + 1;
    } else {
      result[word] = 1;
    }
    return result;
  }, {});
}

module.exports = countWords
