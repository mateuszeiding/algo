type DateInterval = [Date, number];

// Gregorian calendar's full cycle takes 28 years
// we need to check for all "unique" days at most
const MAX = 28 * 365.25;

// GIVEN
// X and Y Dates WHERE X <= Y
// Xi and Yi intervals
// n WHERE n = |(X - Y) % Xi|
// FIND m WHERE n = (Y + (X * m)) % Yi
//
// Why it should work?
// For two intervals that start from 0 - zero can be any date
// for simplification starting date doesn't count as overlap
// When you'll find LCM (Least Common Multiple) you'll find out how may days need to pass for intervals to overlap
// For 2025-02-10 with intervals 3 and 9 the LCM is 9 so date would be 2025-02-19
// To find LCM you can check if 3 * m % 9 = 0
// so if we have any difference on start we need to get this diff as modulo rest so
// for dates 2025-02-08, 2025-02-10 and the same intervals we need to get
// 3 * m % 9 = 2
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
