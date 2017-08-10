/**
For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object.

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
*/

function parseMolecule(formula) {
  var matchParens = /\(([^)]+)\)/;
  var matchBracks = /\[([^\]]+)]/;
}

function isLC(letter) {
  return /[a-z]/.test(letter);
}

function parseBlock(stringLeft, startingChar) {
  let matchingChars = {'(': ')', '[': ']'};
  let endChar = "";

  if(startingChar) endChar = matchingChars[startingChar];

}

function mergeObjs(obj1, obj2) {
  let ret = Object.assign({}, obj1);
  for(let i in obj2) {
    if(obj1[i]) ret[i] += obj2[i];
    else ret[i] = obj2[i];
  }
  return ret;
}