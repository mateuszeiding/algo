type DateInterval = [Date, number];

// Gregorian calendar's full cycle takes 28 years
// we need to check for all "unique" days at most
const MAX = 28 * 365.25;

export default function overlapingDateInterval(
	fir: DateInterval,
	sec: DateInterval,
) {
	// earlier date always first
	if (fir[0] > sec[0]) {
		return overlapingDateInterval(sec, fir);
	}

	const daysDiff = getDaysDiff(fir[0], sec[0]);
	// overlap on first interval
	if (daysDiff === fir[1]) {
		console.log(0);
		return 0;
	}

	// get smallest diff where fir <= sec && fir + interval >= sec
	if (daysDiff > fir[1]) {
		fir[0].setDate(fir[0].getDate() + Math.floor(daysDiff / fir[1]) * fir[1]);
	}

	let mod: number | undefined;
	let val = 0;
	const n = getDaysDiff(fir[0], sec[0]);
	while (mod !== n && val < MAX) {
		mod = val % sec[1];

		if (mod === n) break;

		val = val + fir[1];
	}
	console.log(n, mod, val);

	console.log(val);
}

function getDaysDiff(date1: Date, date2: Date): number {
	const diffTime = Math.abs(date2.getTime() - date1.getTime());
	return Math.floor(diffTime / (1000 * 3600 * 24));
}
