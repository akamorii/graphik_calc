'use strict'

class Graph {
    constructor() {
        this.nodes = [[0]];
    }
    graphSize() {
        return this.nodes.length
    }

    createNode(vertexSet) {
        const vertexCount = vertexSet.length;
        console.log(vertexSet);
        this.nodes.push([])
        if (vertexSet) {
            for(let i=0; i<vertexSet.length; i++){
                
            }
        }
        // this.nodes[].push()
    }
    // nodes: [[0]],
    // function createNode()
}

const grp = new Graph()
grp.createNode((1,2,3))