class DisjointSets {
    parents = [];
    weights = [];

    constructor(n) {
        this.parents = new Array(n);
        this.weights = new Array(n);

        for (let i = 0; i < n; i++) {
            this.parents[i] = i;
            this.weights[i] = i;
        }
    }

    Union(a, b) {
        let rootA = this.Find(a);
        let rootB = this.Find(b);

        if (this.weights[rootA] > this.weights[rootB]) {
            this.parents[rootB] = rootA;
            this.weights[rootA] += this.weights[rootB];
        } else {
            this.parents[rootA] = rootB;
            this.weights[rootB] += this.weights[rootA];
        }
    }

    Find(a) {
        while (a !== this.parents[a]) {
            a = this.parents[this.parents[a]];
        }
        return a;
    }
}

const A = 'a'.charCodeAt(0);
''