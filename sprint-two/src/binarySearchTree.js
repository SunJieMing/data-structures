var makeBinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  newBinaryTree.value = value;
  return extend(newBinaryTree, binaryTreeMethods);
};

var binaryTreeMethods = {};

var extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
};

binaryTreeMethods.insert = function(value){
  var newNode = makeBinarySearchTree(value);
  if (value < this.value) {
    if (!this.left) {
      this.left = newNode;
    }  else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(target){
  if (this.value === target){
    return true;
  }
  if (this.left) {
    if (this.left.contains(target)) {
      return true;
    }
  }
  if (this.right){
    if (this.right.contains(target)){
      return true;
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(cb){
  cb(this.value);
  if(this.right){
    this.right.depthFirstLog(cb);
  }
  if(this.left){
    this.left.depthFirstLog(cb);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
