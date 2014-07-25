var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this[item] = item;
};

setPrototype.contains = function(item){
  var obj = this;
  for (var key in obj){
    if (obj[key] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  if (this.hasOwnProperty(item)){
    delete this[item];
  }

};


// item cannot equal prototype methods\
/*
 * Complexity: What is the time complexity of the above functions?
 */
