export const calculatePlayingField = (columns, lines) => {
  console.log('object :>> ', columns, lines);
  const arr = Array(lines)
    .fill(0)
    .map(() => Array(columns).fill(0));
  console.log('calculatePlayingField :>> ', arr);
};
