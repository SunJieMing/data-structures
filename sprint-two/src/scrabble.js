var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  return extend(newTree, treeMethods);
};

var extend = function(obj1, obj2) {
  for (var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = makeTree(value);
  if (!this.children) {
    this.children = [newNode];
  } else {
    this.children.push(newNode);
  }
};

treeMethods.contains = function(target){
  if (this.value === target){
    return true;
  } else if (this.children) {
    for(var i = 0; i < this.children.length; i++){
      if (this.children[i].contains(target)){
        return true;
      }
    }
  }
  return false;

};

var scrabbleFunction = function(remainingTiles, combination){
  //if !remaining,
  for (remainingTiles.length)
    scrabbleFunction(remainingTiles.remove[i], combination + "" + i)
};
