type SingleLinkNode<T> = {
  value: T;
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

export default class SingleLinkedList<T> implements ISingleLinkedList<T> {
  public length: number = 0;
  private head: SingleLinkNode<T> | undefined = undefined;

  insertAt(item: T, index: number): void {
    if (index > this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.prepend(item);
    } else if (this.length === index) {
      this.append(item);
    }

    let curr = this.head;
    for (let i = 0; curr && i < index - 1; i++) {
      curr = curr?.next;
    }

    this.length++;
    curr = curr as SingleLinkNode<T>;
    const node: SingleLinkNode<T> = { value: item, next: undefined };

    node.next = curr.next;
    curr.next = node;
  }

  remove(item: T): T | undefined {
    if (this.head?.value === item) {
      this.length--;
      const val = this.head.value;
      this.head = this.head.next;
      return val;
    }

    let curr = this.head;
    while (curr?.next?.value !== item && curr?.next !== undefined) {
      curr = curr?.next;
    }

    if (curr?.next === undefined) {
      return undefined;
    }

    this.length--;
    const toRemove = curr.next;
    curr.next = toRemove?.next;

    return toRemove?.value;
  }

  removeAt(index: number): T | undefined {
    if (index > this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.length--;
      const val = this.head?.value;
      this.head = this.head?.next;
      return val;
    }

    let curr = this.head;
    for (let i = 0; curr && i < index - 1; i++) {
      curr = curr?.next;
    }

    if (curr?.next === undefined) {
      return undefined;
    }

    this.length--;
    const toRemove = curr.next;
    curr.next = toRemove?.next;

    return toRemove?.value;
  }

  append(item: T): void {
    if (this.length === 0) {
      this.prepend(item);
      return;
    }

    const node: SingleLinkNode<T> = { value: item, next: undefined };

    this.length++;
    let idx = 0;
    let curr = this.head;
    while (curr?.next !== undefined) {
      curr = curr?.next;
      idx++;
    }

    curr = curr as SingleLinkNode<T>;
    curr.next = node;
  }

  prepend(item: T): void {
    const node: SingleLinkNode<T> = { value: item, next: undefined };

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  get(index: number): T | undefined {
    if (index === 0) {
      return this.head?.value;
    }

    let idx = 0;
    let current = this.head;
    do {
      current = current?.next;
      idx++;
    } while (idx < index);

    return current?.value;
  }
}
