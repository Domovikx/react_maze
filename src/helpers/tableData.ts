export const tableData = (lines: number, columns: number) =>
  Array.from({ length: lines }, (item, line) =>
    Array.from({ length: columns }, (item, column) => [line, column]),
  );
