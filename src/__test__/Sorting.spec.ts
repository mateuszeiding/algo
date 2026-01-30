import { bubbleSort } from "../sorting_algorithms/comparison/BubbleSort";
import { cocktailShakerSort } from "../sorting_algorithms/comparison/CocktailShakerSort";
import { gnomeSort } from "../sorting_algorithms/comparison/GnomeSort";
import { quickSort } from "../sorting_algorithms/comparison/QuickSort";
import { describe, expect, test } from "./framework/index";

type ValueExpect<T> = {
	val: T;
	ex: T;
};

// Author: ChatGPT
const testCases: ValueExpect<number[]>[] = [
	{ val: [3, 1, 4, 1, 5, 9], ex: [1, 1, 3, 4, 5, 9] },
	{ val: [1, 2, 3, 4, 5], ex: [1, 2, 3, 4, 5] },
	{ val: [5, 4, 3, 2, 1], ex: [1, 2, 3, 4, 5] },
	{ val: [5, 1, 5, 3, 5, 2, 1], ex: [1, 1, 2, 3, 5, 5, 5] },
	{ val: [42], ex: [42] },
	{ val: [], ex: [] },
	{ val: [-3, -1, -4, -1, -5, -9], ex: [-9, -5, -4, -3, -1, -1] },
	{ val: [3.5, 2.1, 4.2, 3.1, 5], ex: [2.1, 3.1, 3.5, 4.2, 5] },
	{
		val: [10, 50, 20, 5, 70, 100, 30, 60, 40],
		ex: [5, 10, 20, 30, 40, 50, 60, 70, 100],
	},
	{ val: [7, 7, 7, 7, 7], ex: [7, 7, 7, 7, 7] },
];
// Author: ChatGPT

const testCase = (title: string, sortFn: <T>(arr: T[]) => void) =>
	describe(
		title,
		testCases.map((tc) =>
			test(`should sort ${JSON.stringify(tc.val)}`, () => {
				// Act
				sortFn(tc.val);

				// Assert
				tc.val.forEach((v, i) => {
					expect(v).toBe(tc.ex[i]);
				});
			}),
		),
	);

testCase("Quick Sort", quickSort);
testCase("Bubble Sort", bubbleSort);
testCase("Cocktail Shaker Sort", cocktailShakerSort);
testCase("Gnome Sort", gnomeSort);
