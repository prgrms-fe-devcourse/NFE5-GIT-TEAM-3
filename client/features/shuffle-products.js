
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 ~ i 중 랜덤
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
  return array;
}