export const generateUniqueNumber = (min, max, exclude = []) => {
  const excludeSet = new Set(exclude);
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludeSet.has(num));
  return num;
};

export const initializeNumbers = () => ({
  main: [32, 81, 4, 19, 47, 74],
  special: [
    { number: 18, type: "jolly" },
    { number: 98, type: "superstar" },
  ],
});

export const generateMainNumbers = () => generateUniqueNumbers(6, 1, 90);

export const generateSpecialNumbers = (mainNumbers) => {
  const numbers = generateUniqueNumbers(2, 1, 90, mainNumbers);
  return [
    { number: numbers[0], type: "jolly" },
    { number: numbers[1], type: "superstar" },
  ];
};
