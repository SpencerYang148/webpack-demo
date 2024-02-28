// get random number
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// get random color do not use getRandomNumber
export function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
