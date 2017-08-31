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

ListNode.prototype.isEmpty = function() {return false;};

ListNode.prototype.toString = function() {
  let current = this;
  let str = '(';

  while(!current.isEmpty()) {
    str += current.getVal() + ' ';
    current = current.getNext();
  }

  str = str.slice(0, str.length() - 2);
  str += ')';

  return str;
};

ListNode.prototype.head = function() { return this; };

ListNode.prototype.tail = function() {

};

ListNode.prototype.length = function() {
  let current = this;
  let length = 0;
  while(!current.isEmpty()) {
    length += 1;
    current = current.getNext();
  }
  return length;
};
ListNode.prototype.push = function(x) { /* implement this */ };
ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) { /* implement this */ };