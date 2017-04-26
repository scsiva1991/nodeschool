function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter( message => message.message.length < 50 ).map(m => m.message);
}

module.exports = getShortMessages
