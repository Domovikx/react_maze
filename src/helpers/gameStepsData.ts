import { DIRECTION } from './gameStepsData.types';

const random = (min, max) => Math.round(min + Math.random() * (max - min));

const getFirstCell = (lines, columns) => ({
  row: random(0, lines - 1),
  col: random(0, columns - 1),
  direction: DIRECTION.START,
});

const getNextStep = (currentPosition, lines, columns) => {
  const curRow = currentPosition.row;
  const curCol = currentPosition.col;

  let nextRow = curRow;
  let nextCol = curCol;
  let direction = DIRECTION.ANY;

  if (random(0, 1)) {
    do {
      nextRow = random(
        curRow - 1 >= 0 ? curRow - 1 : curRow,
        curRow + 1 <= lines ? curRow + 1 : curRow,
      );
      direction = nextRow > curRow ? DIRECTION.DOWN : DIRECTION.UP;
    } while (nextRow === curRow);
  } else {
    do {
      nextCol = random(
        curCol - 1 >= 0 ? curCol - 1 : curCol,
        curCol + 1 <= columns ? curCol + 1 : curCol,
      );
      direction = nextCol > curCol ? DIRECTION.RIGHT : DIRECTION.LEFT;
    } while (nextCol === curCol);
  }

  return {
    row: nextRow,
    col: nextCol,
    direction,
  };
};

export const gameStepsData = (lines = 3, columns = 3, steps = 10) => {
  const gameSteps = Array.from({ length: steps }, () => ({
    row: 0,
    col: 0,
    direction: '',
  }));

  gameSteps.map((item, index) => {
    if (index === 0) {
      gameSteps[0] = getFirstCell(lines, columns);
      return;
    }

    gameSteps[index] = getNextStep(gameSteps[index - 1], lines, columns);
  });
  return gameSteps;
};
