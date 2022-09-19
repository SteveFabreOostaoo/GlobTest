const foo = (intervals) => {
  // Prevent only interval
  if (intervals.length < 2) return intervals;

  // Sort intervals by first value
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize result with initial value of the first interval
  let result = [intervals[0]];

  intervals.map((interval) => {
    // Using the last interval in the result array for matching
    const lastIntervalResult = result[result.length - 1];

    // Check if the highest value in lastIntervalResult is higher or equal to current interval
    if (lastIntervalResult[1] >= interval[0]) {
      // If True, keep the highest value
      lastIntervalResult[1] = Math.max(lastIntervalResult[1], interval[1]);
    } else {
      // Else push the interval
      result.push(interval);
    }
  });
  return result;
};

console.log(
  foo([
    [0, 3],
    [6, 10],
  ])
);
console.log(
  foo([
    [0, 5],
    [3, 10],
  ])
);
console.log(
  foo([
    [0, 5],
    [2, 4],
  ])
);
console.log(
  foo([
    [7, 8],
    [3, 6],
    [2, 4],
  ])
);
console.log(
  foo([
    [3, 6],
    [3, 4],
    [15, 20],
    [16, 17],
    [1, 4],
    [6, 10],
    [3, 6],
  ])
);
