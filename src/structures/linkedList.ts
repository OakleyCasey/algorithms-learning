class LinkedListNode {
  val: number
  next: LinkedListNode | null
  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class MyLinkedList {
  head: LinkedListNode | null
  tail: LinkedListNode | null
  length: number
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index: number): number {
    if (index < 0) return -1
    if (this.length === 0) return -1
    let current = this.head
    for (let i = 0; i < index; i++) {
      current?.next && (current = current?.next)
    }
    return current?.val || -1
  }

  getNode(index: number): LinkedListNode | null {
    if (index < 0 || index >= this.length) return null
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    return current || null
  }

  addAtHead(val: number): void {
    const node = new LinkedListNode(val)
    if (this.length === 0 || !this.head || !this.tail) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length += 1
  }

  addAtTail(val: number): void {
    const node = new LinkedListNode(val)
    if (this.length === 0 || !this.head || !this.tail) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
  }

  addAtIndex(index: number, val: number): void {
    if (index <= this.length) {
      this.length += 1
    }
    if (index <= 0 || !this.head) {
      this.addAtHead(val)
    } else if (index === this.length) {
      this.addAtTail(val)
    } else if (index < this.length) {
      const newNode = new LinkedListNode(val)
      let currentNode = this.head.next
      let prevNode = this.head
      for (let i = 1; i < index; i++) {
        if (i === index - 1) {
          prevNode = currentNode!
        }
        if (currentNode) {
          currentNode = currentNode.next
        } else {
          break
        }
      }
      prevNode.next = newNode
      newNode.next = currentNode
    }
  }

  deleteAtIndex(index: number): void {
    if (index >= 0 && index < this.length && this.head) {
      let currentNode: LinkedListNode = this.head
      let prevNode = null
      for (let i = 0; i < index; i++) {
        if (i === index - 1) {
          prevNode = currentNode
        }
        if (currentNode.next) {
          currentNode = currentNode.next
        } else {
          break
        }
      }
      if (prevNode) {
        prevNode.next = currentNode.next
      } else {
        this.head = currentNode.next
      }
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
