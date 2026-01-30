import { SortingDescriptionBuilder } from "../../utils/SortingDescriptionBuilder";

SortingDescriptionBuilder.describe("Gnome Sort")
	.best("n")
	.average("n^2")
	.worst("n^2")
	.memory("1")
	.stable(true)
	.inPlace(true)
	.method("Exchanging");

export function gnomeSort<T>(arr: T[]) {
	let pos = 1;

	while (pos < arr.length) {
		if (pos === 0 || arr[pos] >= arr[pos - 1]) {
			pos = pos + 1;
		} else {
			const t = arr[pos];
			arr[pos] = arr[pos - 1];
			arr[pos - 1] = t;

			pos = pos - 1;
		}
	}
}
