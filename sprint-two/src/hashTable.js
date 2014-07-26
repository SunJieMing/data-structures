var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket === undefined){
    this._storage.set(i, [k,v]);
  } else if(Array.isArray(bucket[0])){
    bucket.push([k, v]);
  } else {
    this._storage.set(i, []);
    var newArr = this._storage.get(i);
    newArr.push(bucket, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket === null){
    return null;
  }
  if(!Array.isArray(bucket[0])){
    return bucket[1];
  } else {
    for(var j = 0; j < bucket.length; j++){
      if(k === bucket[j][0]){
        return bucket[j][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!Array.isArray(bucket[0])){
    this._storage.set(i, null);
  } else {
    for(var j = 0; j < bucket.length; j++){
      if(k === bucket[j][0]){
        return bucket.splice(j, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
