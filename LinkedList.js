class Node {
    constructor(value) {
        this.val = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail=null
    }

    // if head == null => head = value
    // else move to last node and append value
    append(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode; 
        this.tail = newNode; 
    }

    print() {
        let result = '['
        let current = this.head
        while (current.next) {
            result += `${current.val}, `
            current = current.next
        }
        result += `${current.val}]`
        console.log(result)
    }

    removeLast(){
        if(this.head == null) return
        if(this.head.next == null) {
            this.head = null
            this.tail = null
            return
        }

        let current = this.head
        let previous = null
        while(current.next){
            previous=current
            current = current.next
        }
        previous.next = null
        this.tail = previous
    }
}

var linkedLs = new LinkedList()
linkedLs.append(1)
linkedLs.append(2)
linkedLs.append(3)
linkedLs.append(4)
linkedLs.removeLast()
linkedLs.print()