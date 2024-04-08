class Store {
    constructor() {
        this.map = new Map()
    }

    // if found => value
    // else return null
    // time O(1)
    get(key) {
        if (this.map.has(key)) return this.map.get(key)
        return null
    }

    // time O(1)
    update(key, value) {
        this.map.set(key, value)
    }

    // if found delete => true
    // else return false
    // time O(1)
    delete(key) {
        if (this.map.has(key)) {
            this.map.delete(key)
            return true
        }
        return false
    }

    // time O(n)
    getRandom() {
        // index, [key, value]
        // lsIndexs = [1, 4]
        let index = Math.floor(Math.random() * this.map.size)
        let keys = [...this.map.keys()]
        return this.map.get(keys[index])
    }

    getData(){
        return this.map
    }
}

let store = new Store()
store.update('key1', 'value1')
store.update('key2', 'value2')
store.update('key3', 'value3')
store.update('key11', 1)
console.log(store.getData())
console.log("------------")
store.delete('key1')
console.log(store.getData())
console.log("------------")
console.log(store.getRandom())
console.log(store.getRandom())
console.log(store.getRandom())
console.log(store.getRandom())


const ls = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
    'key4': 'value4',
    'key5': 'value5',
}

let a = ls['key1']
''