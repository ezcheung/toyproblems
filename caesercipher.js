/**
Given an alphabet, an offset, a message, and a command,
encode or decode the message by translating each letter in 
the given alphabet by the offset amount. Each letter in the
message will basically “shift” by the offset amount (if the letter 
is a part of the alphabet)
*/

function cipher (alpha, offset, message, command) {
  if(command === 'decode') offset = -offset;
  let alphabet = makeAlphabet(alpha, offset);
  let output = "";
  for(let i = 0; i < message.length; i++) {
    if(alphabet[message[i]]) output += alphabet[message[i]];
    else output += message[i];
  }
  return output;
}

function makeAlphabet (alpha, offset) {
  let alphabet = {};
  for(let i = 0; i < alpha.length; i++) {
    index = (i+offset) % alpha.length;
    while(index < 0) index += alpha.length; 
    alphabet[alpha[i]] = alpha[index];
  }
  return alphabet;
}