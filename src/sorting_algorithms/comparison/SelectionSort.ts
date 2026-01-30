import { SortingDescriptionBuilder } from "../../utils/SortingDescriptionBuilder";

SortingDescriptionBuilder.describe("Selection Sort")
	.best("n^2")
	.average("n^2")
	.worst("n^2")
	.memory("1")
	.stable(false)
	.inPlace(true)
	.method("Selection");

export function selectionSort<T>(arr: T[]) {
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		let min = i;

		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (min !== i) {
			const t = arr[i];
			arr[i] = arr[min];
			arr[min] = t;
		}
	}
}
