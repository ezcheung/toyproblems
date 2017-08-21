function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { return '()' };

EmptyList.prototype.isEmpty = function() { return true; };

EmptyList.prototype.length = function() { return 0 };

EmptyList.prototype.push = function(x) { 
  return ListNode(x, new EmptyList());
};

EmptyList.prototype.remove = function(x) { return this; };

EmptyList.prototype.append = function(xs) { return xs; };

function ListNode(value, next) {
  let val = value;
  let next = next;
  let node = {};
  node.getVal = () => val;
  node.getNext = () => next;

  return node;
}

ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { /* implement this */ };

ListNode.prototype.toString = function() { /* implement this */ };

ListNode.prototype.head = function() { /* implement this */ };
ListNode.prototype.tail = function() { /* implement this */  };
ListNode.prototype.length = function() { /* implement this */ };
ListNode.prototype.push = function(x) { /* implement this */ };
ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) { /* implement this */ };