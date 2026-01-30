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
	for (let i = 0; i < arr.length; i++) {
		let min = i;

		for (let j = i + 1; j < arr.length; j++) {
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
