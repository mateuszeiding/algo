type SingleLinkNode<T> = {
    value: T,
    next: SingleLinkNode<T> | undefined;
};

interface ISingleLinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

class SingleLinkedList<T> implements ISingleLinkedList<T> {
    public length: number;
    private head?: SingleLinkNode<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    insertAt(item: T, index: number): void {
        if (index > this.length + 1) {
            throw Error("Index out of range");
        }

        if (index === 0) {
            this.prepend(item);
        } else if (this.length + 1 === index) {
            this.append(item);
        }

        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr?.next;
        }

        curr = curr as SingleLinkNode<T>;
        const node: SingleLinkNode<T> = {value: item, next: undefined};

        node.next = curr.next;
        curr.next = node;

    };

    remove(item: T): T | undefined {
        if (this.head?.value === item) {
            const val = this.head.value;
            this.head = this.head.next;
            return val;
        }

        let curr = this.head;

        while (curr?.next !== item && curr?.next !== undefined) {
            curr = curr?.next;
        }

        if (curr === undefined) {
            return undefined;
        }

        const toRemove = curr.next;
        curr.next = toRemove?.next;

        return toRemove?.value;
    };

    removeAt(index: number): T | undefined {
        if (index > this.length + 1) {
            throw Error("Index out of range");
        }

        if (index === 0) {
            const val = this.head?.value;
            this.head = this.head?.next;
            return val;
        }

        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr?.next;
        }

        if (curr === undefined) {
            return undefined;
        }

        const toRemove = curr.next;
        curr.next = toRemove?.next;

        return toRemove?.value;
    };

    append(item: T): void {
        if (this.length === 0) {
            this.prepend(item);
        }

        const node: SingleLinkNode<T> = {value: item, next: undefined};

        this.length++;
        let idx = 0;
        let curr = this.head;
        do {
            curr = curr?.next;
            idx++;
        } while (idx < this.length);

        curr = curr as SingleLinkNode<T>;
        curr.next = node;
    };

    prepend(item: T): void {
        const node: SingleLinkNode<T> = {value: item, next: undefined};

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        const curr = this.head;
        this.head = node;
        this.head.next = curr;
    };

    get(index: number): T | undefined {
        let idx = 0;
        let current = this.head;
        do {
            current = current?.next;
            idx++;
        } while (idx < index);

        return current?.value;
    };
}

