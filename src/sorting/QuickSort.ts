export function quickSort<T>(arr: T[]) {
	qs(arr, 0, arr.length - 1);
}

function qs<T>(arr: T[], lo: number, hi: number) {
	if (lo >= hi) {
		return;
	}

	const pivot = partition(arr, lo, hi);

	qs(arr, lo, pivot - 1);
	qs(arr, pivot + 1, hi);
}

function partition<T>(arr: T[], lo: number, hi: number) {
	const pivot = arr[hi];

	let idx = lo - 1;
	for (let i = lo; i < hi; i++) {
		if (arr[i] <= pivot) {
			idx++;
			[arr[i], arr[idx]] = [arr[idx], arr[i]];
		}
	}

	idx++;
	[arr[hi], arr[idx]] = [arr[idx], arr[hi]];

	return idx;
}
