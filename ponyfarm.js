/**
A certain pony farm (cage-free) raises and keeps track of cowboys’ 
and cowgirls’ ponies. Each pony has a name, id, dietary allergies, 
and email address (the owner’s email address).

Given an array of pony objects and an owner’s email address, 
return an alphabetically ordered array of all foods 
(without duplicates) that the owner should avoid feeding his/her 
ponies.

NOTE: You are required to use at least one map and one filter. 
Pros can use reduce to make their code even more functional-style.
*/

// Helper functions
function getProp(name) {
  return function (object) { return object[name] }
}

Array.prototype.concatAll = function() {
  return this.reduce(function (result, subArray) {
    return result.concat(subArray)
  })
}

function getPonyAllergies (ponies, ownerEmail) {
  
}