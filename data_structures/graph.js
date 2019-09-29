function Graph() {
    this.adjList = {}
}

Graph.prototype.addVertex = function(vertex){
    this.adjList[vertex] = [];
}

Graph.prototype.addEdge = function(vertex1, vertex2){
    if (!this.adjList[vertex1]){
        this.adjList[vertex1] = [];
    }

    this.adjList[vertex1].push(vertex2)
}