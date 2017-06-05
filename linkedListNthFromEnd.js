/**
You are given the head of a linked list, a value to be inserted, and an offset n. Write a function that 
inserts the provided value n spaces from the end of the linked list.
*/

var insertFromEnd = function(linkedList, value, offset) {
  var length = 1;
  var currNode = linkedList;
  while(currNode.next !== null) {
    currNode = currNode.next;
    length += 1;
  }
  if(length < offset) return linkedList;
  if(length === offset) {
    var newNode = Node(value);
    newNode.next = linkedList;
    return newNode;
  }
  if(offset <= 0) {
    var newNode = Node(value);
    currNode.next = newNode;
    return linkedList;
  }

  currNode = linkedList;
  for(var i = 1; i < length - offset; i++) {
    currNode = currNode.next;
  }

  var newNode = Node(value);
  newNode.next = currNode.next;
  currNode.next = newNode;
  return linkedList;

};