function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { return '()' };

EmptyList.prototype.isEmpty = function() { return true; };

EmptyList.prototype.length = function() { return 0 };
EmptyList.prototype.push = function(x) { /* implement this */ };
EmptyList.prototype.remove = function(x) { /* implement this */ };
EmptyList.prototype.append = function(xs) { /* implement this */ };

function ListNode(value, next) { /* implement this */ }
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