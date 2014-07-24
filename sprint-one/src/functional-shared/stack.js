var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.length = 0;
  return extend(newInstance, stackMethods);

};

var stackMethods = {};

var extend =  function(obj1, obj2) {
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
};

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  this.length && this.length--;
  var result = this.storage[this.length];
  delete this.storage[this.length];
  return result;
};

stackMethods.size = function(){
  return this.length;
};


