var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(!list.head){
      list.tail = list.head = newNode;
    } else {
      list.tail.next = list.tail = newNode;
    }

  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){

    var nextHead = list.head;
    while(nextHead.next !== null){
      if(nextHead.value === target){
        return true;
      } else {
        nextHead = nextHead.next;
      }
    }
    return nextHead.value === target;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
