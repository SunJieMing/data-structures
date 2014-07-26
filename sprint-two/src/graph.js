var Graph = function(){
};

Graph.prototype.addNode = function(newNode, toNode){
  this[newNode] = {};
  this[newNode].edges = [];
  if(Object.keys(this).length === 2 && !toNode){
    for(var key in this){
      var next = this[key];
      if(key !== newNode && next.hasOwnProperty('edges')){
        toNode = key;
      }
    }
  }
  if (toNode){
    this[newNode].edges.push(toNode);
    this[toNode].edges.push(newNode);
  }
};

Graph.prototype.contains = function(node){
  for(var key in this){
    if(key === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var key in this){
    if(key === node){
      for(var i = 0; i < this[key].edges.length; i++){
        var connection = this[key].edges[i];
        for(var k = 0; k < this[connection].edges.length; k++){
          if(this[connection].edges[k] === this[node]){
            this[connection].edges.splice(k, 1);
          }
        }
      }
      delete this[key];
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  for(var j = 0; j < this[fromNode].edges.length; j++){
    if(this[fromNode].edges[j] === toNode){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var grbob = this;
  var remover = function(from, to) {
    for(var i = 0; i < grbob[from].edges.length; i++){
      if(grbob[from].edges[i] === to){
        grbob[from].edges.splice(i, 1);
      }
    }
    if  (grbob[from].edges.length === 0) {
      delete grbob[from];
    }
  };
  remover(fromNode, toNode);
  remover(toNode, fromNode);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
