import { SortingDescriptionBuilder } from "../../utils/SortingDescriptionBuilder";

SortingDescriptionBuilder.describe("Cocktail Shaker Sort")
	.best("n")
	.average("n^2")
	.worst("n^2")
	.memory("1")
	.stable(true)
	.inPlace(true)
	.method("Exchanging");

export function cocktailShakerSort<T>(arr: T[]) {
	let beginIdx = 1;
	let endIdx = arr.length - 1;

	while (beginIdx <= endIdx) {
		let newBeginIdx = endIdx;
		let newEndIdx = beginIdx;

		for (let i = beginIdx; i <= endIdx; i++) {
			if (arr[i] > arr[i + 1]) {
				const t = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = t;

				newEndIdx = i;
			}
		}

		endIdx = newEndIdx - 1;

		for (let i = endIdx; i >= beginIdx; i--) {
			if (arr[i] > arr[i + 1]) {
				const t = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = t;

				newBeginIdx = i;
			}
		}

		beginIdx = newBeginIdx + 1;
	}
}
