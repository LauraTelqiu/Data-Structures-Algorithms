class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
  }
  addVertex(node) {

    this.adjacentList[node] = []
    this.numberOfNodes++

  }
  addEdge(node1, node2) {
    //undirected Graph 
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)


  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
console.log(myGraph.addVertex('0'));
console.log(myGraph.addVertex('1'));
console.log(myGraph.addVertex('2'));
console.log(myGraph.addVertex('3'));
console.log(myGraph.addVertex('4'));
console.log(myGraph.addVertex('5'));
console.log(myGraph.addVertex('6'));
console.log(myGraph.addEdge('3', '1'));
console.log(myGraph.addEdge('3', '4'));
console.log(myGraph.addEdge('4', '2'));
console.log(myGraph.addEdge('4', '5'));
console.log(myGraph.addEdge('1', '2'));
console.log(myGraph.addEdge('1', '0'));
console.log(myGraph.addEdge('0', '2'));
console.log(myGraph.addEdge('6', '5'));

myGraph.showConnections();
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 