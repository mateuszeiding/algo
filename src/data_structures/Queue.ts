type Node<T> {
    value: T,
    prev: Node<T> : undefined;
}

export default class Queue {
    length: Number;
    head: Node<T> | undefined;
    tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(value: T): void {
        this.length++;
        const node: Node<T> = { value };

        if (this.head === undefined) {
            this.head = this.tail = node;
            return;
        }

        this.tail.prev = node;
        this.tail = node;
    }

    dequeue(): Node<T> | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.prev;

        return head;
    }
}
