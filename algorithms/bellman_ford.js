// Belman-Ford Algorithm to find shortest paths in a Graph with negative edges.

// We iterate, until there's no changes, through the graph vertices and keep track of the cost (distance)
// for every edge out of each vertex. On the following iteration we evaluate if we can have a shorter distance
// with the current cost of our starting vertex. We update the data if so.

const vertices = ['S', 'A', 'B', 'C', 'D', 'E'];

// Cache
let memo = {
    S: 0,
    A: Number.POSITIVE_INFINITY,
    B: Number.POSITIVE_INFINITY,
    C: Number.POSITIVE_INFINITY,
    D: Number.POSITIVE_INFINITY,
    E: Number.POSITIVE_INFINITY
}

// GRAPH
const graph = [
    {from: "S", to: "A", cost: 4},
    {from: "S", to: "E", cost: -5},
    {from: "A", to: "C", cost: 6},
    {from: "B", to: "A", cost: 3},
    {from: "C", to: "B", cost: -2},
    {from: "D", to: "C", cost: 3},
    {from: "D", to: "A", cost: 10},
    {from: "E", to: "D", cost: 8}
]

const iterate = (v) => {
    let again = false;

    for(let vertex of vertices){
        // Loop graph
        const outgoingNodes = graph.filter(obj => obj.from === vertex);

        for (let trip of outgoingNodes){
            const localCost = memo[trip.from] + trip.cost;
            if (localCost<memo[trip.to]){
                memo[trip.to] = localCost;
                again = true;
            }
        }
    }
    // If there was change iterate again
    if (again){
        iterate(v)
    }
}

iterate(vertices);
console.log('graph', memo)