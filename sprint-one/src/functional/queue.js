var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    var result = storage[first];
    delete storage[first];
    length - first && first++;
    return result;
  };

  someInstance.size = function(){
    return length - first;
  };

  return someInstance;
};
