import { SortingDescriptionBuilder } from "../../utils/SortingDescriptionBuilder";

SortingDescriptionBuilder.describe("Exchange Sort")
	.best("n^2")
	.average("n^2")
	.worst("n^2")
	.memory("1")
	.stable(false)
	.inPlace(true)
	.method("Exchanging");

export function exchangeSort<T>(arr: T[]) {
	const len = arr.length;

	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			if (arr[i] > arr[j]) {
				const t = arr[i];
				arr[i] = arr[j];
				arr[j] = t;
			}
		}
	}
}
