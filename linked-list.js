class Node {
    data = 0
    next = null

    constructor(data = 0, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    head = null

    push(x) {
        if (this.head == null) {
            this.head = new Node(x)
            return
        }

        let ptr = this.head
        while (ptr.next) {
            ptr = ptr.next
        }

        ptr.next = new Node(x)
    }

    traversal() {
        let ptr = this.head
        let outputStream = ''

        while (ptr) {
            outputStream += ptr.data + ' '
            ptr = ptr.next
        }

        console.log(outputStream)
    }
}

let list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)

list.traversal()
