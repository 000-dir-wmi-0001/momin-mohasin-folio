/**
 * Duration Utilities
 *
 * Computes work-experience durations from startDate/endDate rather than
 * relying on hand-maintained strings, so "Present" roles and the total
 * years-of-experience stat stay accurate without manual edits.
 *
 * These are called from Server Components only (app/page.tsx,
 * app/projects/page.tsx) and the resulting strings are passed down as
 * props — computing a Date-dependent value directly inside a "use client"
 * component would let the server-rendered (build-time) value and the
 * client-hydrated (page-load-time) value drift apart and trigger a
 * hydration mismatch.
 */

interface DurationParts {
  years: number;
  months: number;
  totalMonths: number;
}

/**
 * LinkedIn calculates tenure at month granularity (it never looks at the
 * day-of-month) and counts inclusively on both ends — a role you're still
 * in during its start month reads "1 mo", not "0 mo", and Jan-Feb reads
 * "2 mos", not "1 mo". Matching that exactly: totalMonths = (months
 * between start and end) + 1, floored to a minimum of 1.
 */
function getDurationParts(
  startDate: string,
  endDate: string | undefined,
  referenceDate: Date
): DurationParts {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : referenceDate;

  const totalMonths = Math.max(
    (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1,
    1
  );

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    totalMonths,
  };
}

/** e.g. "1 yr 2 mos", "6 mos", "2 yrs" — LinkedIn-style inclusive month count */
export function formatDuration(
  startDate: string,
  endDate?: string,
  referenceDate: Date = new Date()
): string {
  const { years, months } = getDurationParts(startDate, endDate, referenceDate);

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years !== 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months !== 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** e.g. "1.5+" — sums every role's duration into a single headline stat */
export function formatTotalExperience(
  entries: Array<{ startDate: string; endDate?: string }>,
  referenceDate: Date = new Date()
): string {
  const totalMonths = entries.reduce(
    (sum, entry) =>
      sum + getDurationParts(entry.startDate, entry.endDate, referenceDate).totalMonths,
    0
  );

  const years = Math.floor((totalMonths / 12) * 2) / 2; // round down to nearest 0.5
  const label = Number.isInteger(years) ? years.toFixed(0) : years.toFixed(1);
  return `${label}+`;
}
