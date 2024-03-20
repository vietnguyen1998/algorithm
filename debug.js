/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
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


var earliestAcq = function (logs, n) {
  const set = new DisjointSets(n);

  logs.sort((a, b) => a[0] - b[0]);
  let earliestTimestampWhenAllBecameFriends = 0;

  for (let i = 0; i < logs.length; i++) {
      const timestamp = logs[i][0];
      const a = logs[i][1];
      const b = logs[i][2];

      let va = set.Find(a) 
      let vb = set.Find(b)
      console.log(a,b, va, vb) 
      if (set.Find(a) !== set.Find(b)) {
          earliestTimestampWhenAllBecameFriends = timestamp;
          set.Union(a, b);
      }
  }

  // Code to check if at the end every person has become friends with the rest of the people.
  let parent = set.Find(0);
  for (let i = 0; i < n; i++) {
      if (parent !== set.Find(i)) {
          return -1;
      }
  }
  return earliestTimestampWhenAllBecameFriends;
};

let logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]]
earliestAcq(logs, 6)

