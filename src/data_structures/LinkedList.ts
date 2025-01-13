enum LinkedListEnum {
    "single",
    "double",
};

type LinkNode<T, type extends LinkedListEnum> = type extends LinkedListEnum.single ?
    LinkBaseNode<T, LinkedListEnum.single> : LinkDoubleNode<T>;

type LinkBaseNode<T, type extends LinkedListEnum> = {
    next: LinkNode<T, type>
};

type LinkDoubleNode<T> = LinkBaseNode<T, LinkedListEnum.double> & {
    prev: LinkNode<T, LinkedListEnum.double>
};

export class LinkedList<T> {
    constructor(type?: LinkedListEnum) {
        return this.createLinkedList(type ?? LinkedListEnum.single);
    }

    private createLinkedList(type: LinkedListEnum): LinkedListSingle<T> | LinkedListDouble<T> {
        switch(type) {
            case LinkedListEnum.single: return new LinkedListSingle();
            case LinkedListEnum.double: return new LinkedListDouble();
            default: return new LinkedListSingle();
        }

    }
}

class LinkedListSingle<T> extends LinkedList<T> {
    length: number;
    current: LinkNode<T, LinkedListEnum.single> | undefined;

    constructor() {
        super();
        this.length = 0;
        this.current = undefined;
    }
}

class LinkedListDouble<T> extends LinkedList<T> {
    length: number;
    current: LinkNode<T, LinkedListEnum.double> | undefined;

    constructor() {
        super();
        this.length = 0;
        this.current = undefined;
    }
}
