type Node<T> = {
    value: T,
    next: Node<T> | undefined;
}

export default class Queue<T> {
    length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    // O(1)
    enqueue(value: T): void {
        this.length++;
        const node: Node<T> = { value, next: undefined };

        if (this.tail === undefined) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // O(1)
    dequeue(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head?.next;

        return head?.value;
    }
}
