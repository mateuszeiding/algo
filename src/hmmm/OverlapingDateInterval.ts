type DateInterval = [Date, number];

// Gregorian calendar's full cycle takes 28 years
// we need to check for all "unique" days at most
const MAX = 28 * 365.25;

// OK, that was wrong D:
export default function overlapingDateInterval(
	X: DateInterval,
	Y: DateInterval,
) {
	// earlier date always first
	if (X[0] > Y[0]) {
		return overlapingDateInterval(Y, X);
	}

	const daysDiff = getDaysDiff(X[0], Y[0]);
	// overlap on first interval
	if (daysDiff === X[1]) {
		console.log(0);
		return 0;
	}

	// get smallest diff where fir <= sec && fir + interval >= sec
	if (daysDiff > X[1]) {
		X[0].setDate(X[0].getDate() + Math.floor(daysDiff / X[1]) * X[1]);
	}

	let mod: number | undefined;
	let m = 0;
	const n = getDaysDiff(X[0], Y[0]);
	while (mod !== n && m < MAX) {
		mod = m % Y[1];

		if (mod === n) break;

		m = m + X[1];
	}
	console.log(n, mod, m);

	console.log(m);
}

function getDaysDiff(date1: Date, date2: Date): number {
	const diffTime = Math.abs(date2.getTime() - date1.getTime());
	return Math.floor(diffTime / (1000 * 3600 * 24));
}
