import Stack from "../../data_structures/Stack";
import { describe, expect, test } from "../framework/index";

describe("Stack", [
	test("should return undefined when stack is empty", () => {
		// Arrange
		const queue = new Stack<number>();

		// Act
		const val = queue.pop();

		// Assert
		expect(val).toBe(undefined);
	}),
	test("should return last given value when there are multiple values", () => {
		// Arrange
		const queue = new Stack<number>();

		// Act
		queue.push(1, 2, 3);

		const val = queue.pop();

		// Assert
		expect(val).toBe(3);
	}),
	test("should reverse input order when returning value", () => {
		// Arrange
		const queue = new Stack<number>();

		// Act
		queue.push(1, 2, 3);

		const firstVal = queue.pop();
		const secondVal = queue.pop();

		// Assert
		expect(firstVal).toBe(3);
		expect(secondVal).toBe(2);
	}),
]);
