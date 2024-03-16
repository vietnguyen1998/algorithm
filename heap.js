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