export default function combinationsCalculator(points: number) {
  const possibleScores = [3, 6, 7, 8];
  const combinations = Array(points + 1).fill(0);
  combinations[0] = 1;

  possibleScores.forEach((score) => {
    combinations.forEach((_, i) => {
      if (i >= score) {
        combinations[i] += combinations[i - score];
      }
    });
  });

  return combinations[points];
}
