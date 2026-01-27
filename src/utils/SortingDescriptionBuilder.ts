type TName = "Quick Sort";

type TMethod =
	| "Selection"
	| "Merging"
	| "Insertion"
	| "Partitioning"
	| "Exchanging"
	| "Partitioning & Selection"
	| "Partitioning & Merging"
	| "Insertion & Merging"
	| "Insertion & Selection";

type TSpeed =
	| "n log n"
	| "1"
	| "log n"
	| "n"
	| "n log^2 n"
	| "n log n (balanced)"
	| "n^2"
	| "n + 2^k"
	| "n + k"
	| "n + r"
	| "n^2 * k"
	| "n * (k/d)"
	| "n * (k/1)"
	| "n * (k/s + d)"
	| "—";

type TMemory =
	| "1"
	| "log n"
	| "n"
	| "2^k"
	| "n * k"
	| "n + r"
	| "n + 2^d"
	| "2^1"
	| "(k/d) * 2^d"
	| "n * (k/d)"
	| "nk";

export class SortingDescriptionBuilder {
	static describe(_: TName) {
		return new SortingDescriptionBuilder();
	}

	best(_: TSpeed) {
		return this;
	}

	average(_: TSpeed) {
		return this;
	}

	worst(_: TSpeed) {
		return this;
	}

	memory(_: TMemory) {
		return this;
	}

	stable(_: boolean) {
		return this;
	}

	inPlace(_: boolean) {
		return this;
	}

	method(_: TMethod) {
		return this;
	}

	end() {
		return;
	}
}
