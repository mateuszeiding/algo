import SingleLinkedList from "../../data_structures/SingleLinkedList";
import { describe, expect, test } from "../framework/index";

function prependNewList<T>(arr: T[]): SingleLinkedList<unknown> {
	// Arrange
	const linkedList = new SingleLinkedList();

	// Act
	arr.forEach((val) => {
		linkedList.prepend(val);
	});

	// Assert
	arr.reverse();
	arr.forEach((v, i) => {
		expect(linkedList.get(i)).toBe(v);
	});

	expect(linkedList.length).toBe(arr.length);

	return linkedList;
}

function printList<T>(ll: SingleLinkedList<T>) {
	const values = [];

	for (let i = 0; i <= ll.length; i++) {
		values.push(ll.get(i));
	}

	console.log(values.join(","));
}

describe("Single Linked List", [
	test("should have 0 length after initialization", () => {
		// Arrange
		const linkedList = new SingleLinkedList();

		// Assert
		expect(linkedList.length).toBe(0);
	}),
	test("append() should add element at the end of the list", () => {
		// Arrange
		const linkedList = new SingleLinkedList();

		// Act
		linkedList.append(3);
		linkedList.append(1);
		linkedList.append(5);

		// Assert
		expect(linkedList.get(0)).toBe(3);
		expect(linkedList.get(1)).toBe(1);
		expect(linkedList.get(2)).toBe(5);
		expect(linkedList.length).toBe(3);
	}),
	test("prepend() should add element at the end of the list", () => {
		// Arrange
		const linkedList = new SingleLinkedList();

		// Act
		linkedList.prepend(3);
		linkedList.prepend(1);
		linkedList.prepend(5);

		// Assert
		expect(linkedList.get(0)).toBe(5);
		expect(linkedList.get(1)).toBe(1);
		expect(linkedList.get(2)).toBe(3);
		expect(linkedList.length).toBe(3);
	}),
	test("get() should return value from provided index", () => {
		const values = [5, 4, 3, 2, 1];
		const linkedList = prependNewList(values);

		// Assert
		expect(linkedList.get(0)).toBe(1);
		expect(linkedList.get(1)).toBe(2);
		expect(linkedList.get(2)).toBe(3);
		expect(linkedList.get(3)).toBe(4);
		expect(linkedList.get(4)).toBe(5);
		expect(linkedList.get(5)).toBe(undefined);
	}),
	test("remove() should remove first found given value and return it", () => {
		// Arrange
		const values = [3, 1, 5, 6];
		const linkedList = prependNewList(values);

		// Act
		const removed = linkedList.remove(5);

		// Assert
		expect(linkedList.get(0)).toBe(6);
		expect(linkedList.get(1)).toBe(1);
		expect(linkedList.get(2)).toBe(3);
		expect(linkedList.length).toBe(3);
		expect(removed).toBe(5);
	}),
	test("remove() should NOT remove anything and return undefined when value does NOT exist", () => {
		// Arrange
		const values = [3, 1, 5, 6];
		const linkedList = prependNewList(values);

		// Act
		const removed = linkedList.remove(7);

		// Assert
		expect(linkedList.get(0)).toBe(6);
		expect(linkedList.get(1)).toBe(5);
		expect(linkedList.get(2)).toBe(1);
		expect(linkedList.get(3)).toBe(3);
		expect(linkedList.length).toBe(4);
		expect(removed).toBe(undefined);
	}),
	test("removeAt() should remove value on given index and return it", () => {
		// Arrange
		const values = [3, 1, 5, 6];
		const linkedList = prependNewList(values);

		// Act
		const removed = linkedList.removeAt(2);

		// Assert
		expect(linkedList.get(0)).toBe(6);
		expect(linkedList.get(1)).toBe(5);
		expect(linkedList.get(2)).toBe(3);
		expect(linkedList.length).toBe(3);
		expect(removed).toBe(1);
	}),
	test("removeAt() should throw and error when given index is out of range", () => {
		// Arrange
		const values = [3, 1, 5, 6];
		const linkedList = prependNewList(values);

		// Assert
		expect(() => linkedList.removeAt(5)).fn?.toThrow("Index out of range");
	}),
	test("insertAt() should throw and error when given index is out of range", () => {
		// Arrange
		const values = [3, 1, 5, 6];
		const linkedList = prependNewList(values);

		// Assert
		expect(() => linkedList.insertAt(8, 5)).fn?.toThrow("Index out of range");
	}),
	test("insertAt() should insert on given index if index is NOT out of range", () => {
		// Arrange
		const values = [3, 1, 5, 6];
		const linkedList = prependNewList(values);

		// Act
		linkedList.insertAt(8, 2);

		// Assert
		// Assert
		expect(linkedList.get(0)).toBe(6);
		expect(linkedList.get(1)).toBe(5);
		expect(linkedList.get(2)).toBe(8);
		expect(linkedList.get(3)).toBe(1);
		expect(linkedList.get(4)).toBe(3);
		expect(linkedList.length).toBe(5);
	}),
]);
