var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newInstance = {};
  newInstance.storage = {};
  newInstance.length = 0;
  newInstance.first = 0;

  return extend(newInstance, queueMethods);
};

var queueMethods = {};

var extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
};

queueMethods.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  var result = this.storage[this.first];
  delete this.storage[this.first];
  this.length - this.first && this.first++;
  return result;
};

queueMethods.size = function(){
  return this.length - this.first;
};
