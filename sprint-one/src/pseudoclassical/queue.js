var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.first];
  delete this.storage[this.first];
  this.length - this.first && this.first++;
  return result;
};
Queue.prototype.size = function(){
  return this.length - this.first;
};
