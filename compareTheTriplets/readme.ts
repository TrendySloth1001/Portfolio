/**
 * compareTriplets
 *
 * Compares two arrays of numeric scores (one for Alice, one for Bob) element‑by‑element and awards
 * points: 1 point to Alice if her score at an index is greater than Bob's, 1 point to Bob if his
 * score is greater, and 0 points for ties. Returns a two‑element array with the total points.
 *
 * Markdown details
 * - The function treats each index as a separate category and compares values pairwise.
 * - Ties do not award points to either side.
 * - It is expected that both arrays are of the same length; passing arrays of differing lengths may
 *   lead to undefined comparisons for out‑of‑bounds indices and is discouraged.
 *
 * @param a - Alice's scores per category (array of numbers). Expected same length as `b`.
 * @param b - Bob's scores per category (array of numbers). Expected same length as `a`.
 *
 * @returns A two-element number array: [aliceScore, bobScore].
 *
 * @remarks
 * - Complexity: O(n) time where n is the number of categories (length of `a`), O(1) additional space.
 * - Behavior on non-number elements is not defined; inputs should be numeric.
 *
 * **Description:** The function tallies categorywise wins for Alice and Bob and returns their totals
 * in the form [aliceScore, bobScore].
 */
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function compareTriplets(a: number[], b: number[]): number[] {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
    }

    return [aliceScore, bobScore];
}
// The function takes two arrays of integers, `a` and `b`, representing scores given by Alice and Bob in a competition.
// Each index in the arrays corresponds to a specific category, and the scores are compared category by category.
// If Alice's score in a category is greater than Bob's, Alice gets a point. If Bob's score is greater, Bob gets a point.
// The function returns an array with two integers: the first is Alice's total score, and the second is Bob's total score.