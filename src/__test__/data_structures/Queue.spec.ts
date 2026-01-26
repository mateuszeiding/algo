import { describe, test, expect } from "../framework/index";
import Queue from "../../data_structures/Queue";

describe("Queue", [
  test("should return undefined when queue is empty", () => {
    // Arrange
    const queue = new Queue<number>();

    // Act
    const val = queue.dequeue();

    // Assert
    expect(val).toBe(undefined);
  }),
  test("should return first given value when there are multiple values", () => {
    // Arrange
    const queue = new Queue<number>();

    // Act
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const val = queue.dequeue();

    // Assert
    expect(val).toBe(1);
  }),
  test("should keep order of returned values", () => {
    // Arrange
    const queue = new Queue<number>();

    // Act
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const firstVal = queue.dequeue();
    const secondVal = queue.dequeue();

    // Assert
    expect(firstVal).toBe(1);
    expect(secondVal).toBe(2);
  }),
]);
