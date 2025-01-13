type Node<T> = {
    value: T,
    next: Node<T> | undefined;
}

export default class Stack<T> {
    length: number;
    private top: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    // O(1)
    push(value: T): void {
        this.length++;
        const node: Node<T> = { value, next: undefined };

        if (this.top === undefined) {
            this.top = node;
            return;
        }

        node.next = this.top;
        this.top = node;
    }

    // O(1)
    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;

        const top = this.top;
        this.top = this.top?.next;

        return top?.value;
    }

    // O(1)
    peek(): T | undefined {
        return this.top?.value;
    }
}
