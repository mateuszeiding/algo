type Node<T> = {
  value: T;
  next: Node<T> | undefined;
};

export default class Stack<T> {
  length: number = 0;
  private top: Node<T> | undefined = undefined;

  // O(1)
  push(...values: T[]): void {
    for (const v of values) {
      this.length++;
      const node: Node<T> = { value: v, next: undefined };

      if (this.top === undefined) {
        this.top = node;
        return;
      }

      node.next = this.top;
      this.top = node;
    }
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
