//https://leetcode.com/problems/network-delay-time/
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let result = -1

    //convert
    let adjList = {}
    for (const [u, v, w] of times) {
        if (!adjList[u]) adjList[u] = {}
        adjList[u][v] = w
    }

    // init 
    let nodes = Array.from({ length: n }, (_, i) => i + 1)
    let distance = {}
    nodes.map(e => distance[e] = Infinity)
    distance[k] = 0
    let visited = new Map()

    // dij
    while (nodes.length > 0) {
        nodes.sort((a, b) => distance[a] - distance[b])
        let closest = nodes.shift()
        visited[closest] = true
        for (let item in adjList[closest]) {
            if (!visited[item]) {
                let newDistance = distance[closest] + adjList[closest][item]
                if (newDistance < distance[item]) {
                    distance[item] = newDistance
                }
            }
        }
    }
    let arr = Object.values(distance)
    result = Math.max(...arr)
    return result == Infinity ? -1 : result
};

let  times = [[1,2,1],[2,3,2],[1,3,4]], n = 3, k = 1
networkDelayTime(times,n,k)

class Heap {
    constructor(nums, max = true) {
        this.heap = []
        this.isMax = max
        nums.forEach(n => this.add(n))
    }
    add(n) {
        this.heap.push(n * (this.isMax ? 1 : -1))
        this.bubbleUp()
    }

    getParent = (i) => Math.floor((i - 1) / 2)

    swap = (a, b) => {
        if (a !== b) {
            const tmp = this.heap[a]
            this.heap[a] = this.heap[b]
            this.heap[b] = tmp
        }
    }

    bubbleUp() {
        if (this.heap.length < 2) return
        let cur = this.heap.length - 1
        let parent = this.getParent(cur)
        while (this.heap[cur] > this.heap[parent]) {
            this.swap(cur, parent)
            cur = parent
            parent = this.getParent(cur)
        }
    }

    length() {
        return this.heap.length
    }

    remove() {
        const result = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.sinkDown()
        return result * (this.isMax ? 1 : -1)
    }

    showTop() {
        return this.heap[0] * (this.isMax ? 1 : -1)
    }

    sinkDown() {
        let cur = 0
        let left = cur * 2 + 1
        let right = cur * 2 + 2
        const isValid = (i) => i < this.heap.length && i >= 0

        let swapLeft = isValid(left) && this.heap[cur] < this.heap[left]
        let swapRight = isValid(right) && this.heap[cur] < this.heap[right]

        while (swapLeft || swapRight) {
            if (swapLeft && swapRight) {
                if (this.heap[left] > this.heap[right]) {
                    this.swap(left, cur)
                    cur = left
                } else {
                    this.swap(right, cur)
                    cur = right
                }
            } else {
                if (swapLeft) {
                    this.swap(left, cur)
                    cur = left
                } else {
                    this.swap(right, cur)
                    cur = right
                }
            }

            left = cur * 2 + 1
            right = cur * 2 + 2
            swapLeft = isValid(left) && this.heap[cur] < this.heap[left]
            swapRight = isValid(right) && this.heap[cur] < this.heap[right]
        }
    }
}