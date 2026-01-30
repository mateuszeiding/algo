import { SortingDescriptionBuilder } from "../../utils/SortingDescriptionBuilder";

SortingDescriptionBuilder.describe("Bubble Sort")
	.best("n")
	.average("n^2")
	.worst("n^2")
	.memory("1")
	.stable(true)
	.inPlace(true)
	.method("Exchanging");

export function bubbleSort<T>(arr: T[]) {
	let n = arr.length;

	do {
		let newn = 0;

		for (let i = 1; i <= n - 1; i++) {
			if (arr[i - 1] > arr[i]) {
				const t = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = t;

				newn = i;
			}
		}

		n = newn;
	} while (n > 0);
}
