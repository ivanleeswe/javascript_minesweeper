//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (arr) => {
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    const rowArr = arr[i].split("");
    arr[i] = rowArr;
  }

  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;

  for (let i = startRow; i <= endRow; i++) {
    for (let j = startCol; j <= endCol; j++) {
      let count = 0;

      if (i === 0 && j === 0) {
        if (arr[i][j + 1] === "*") count++;
        if (arr.length > 1 && arr[i + 1][j + 1] === "*") count++;
        if (arr.length > 1 && arr[i + 1][j] === "*") count++;

        changeSquare(arr, i, j, count);
      } else if (i === 0 && j === endCol) {
        if (arr[i][j - 1] === "*") count++;
        if (arr.length > 1 && arr[i + 1][j - 1] === "*") count++;
        if (arr.length > 1 && arr[i + 1][j] === "*") count++;

        changeSquare(arr, i, j, count);
      } else if (i === 0) {
        if (arr[i][j - 1] === "*") count++;
        if (arr.length > 1 && arr[i + 1][j - 1] === "*") count++;
        if (arr.length > 1 && arr[i + 1][j] === "*") count++;
        if (arr.length > 1 && arr[i + 1][j + 1] === "*") count++;
        if (arr[i][j + 1] === "*") count++;

        changeSquare(arr, i, j, count);
      } else if (i !== startRow && i !== endRow && j === startCol) {
        if (arr[i - 1][j] === "*") count++;
        if (arr[i - 1][j + 1] === "*") count++;
        if (arr[i][j + 1] === "*") count++;
        if (arr[i + 1][j + 1] === "*") count++;
        if (arr[i + 1][j] === "*") count++;

        changeSquare(arr, i, j, count);
      } else if (i !== startRow && i !== endRow && j === endCol) {
        if (arr[i - 1][j] === "*") count++;
        if (arr[i - 1][j - 1] === "*") count++;
        if (arr[i][j - 1] === "*") count++;
        if (arr[i + 1][j - 1] === "*") count++;
        if (arr[i + 1][j] === "*") count++;

        changeSquare(arr, i, j, count);
      } else if (i !== startRow && i !== endRow) {
        if (arr[i - 1][j - 1] === "*") count++;
        if (arr[i - 1][j] === "*") count++;
        if (arr[i - 1][j + 1] === "*") count++;
        if (arr[i][j - 1] === "*") count++;
        if (arr[i][j + 1] === "*") count++;
        if (arr[i + 1][j - 1] === "*") count++;
        if (arr[i + 1][j] === "*") count++;
        if (arr[i + 1][j + 1] === "*") count++;

        changeSquare(arr, i, j, count);
      } else if (i === endRow && j === startCol) {
        if (arr[i - 1][j] === "*") count++;
        if (arr[i - 1][j + 1] === "*") count++;
        if (arr[i][j + 1] === "*") count++;

        changeSquare(arr, i, j, count);
      } else if (i === endRow && j === endCol) {
        if (arr[i - 1][j] === "*") count++;
        if (arr[i - 1][j - 1] === "*") count++;
        if (arr[i][j - 1] === "*") count++;

        changeSquare(arr, i, j, count);
      } else {
        if (arr[i][j - 1] === "*") count++;
        if (arr[i - 1][j - 1] === "*") count++;
        if (arr[i - 1][j] === "*") count++;
        if (arr[i - 1][j + 1] === "*") count++;
        if (arr[i][j + 1] === "*") count++;

        changeSquare(arr, i, j, count);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const rowStr = arr[i].join("");
    arr[i] = rowStr;
  }
  return arr;
};

const changeSquare = (array, row, column, count) => {
  if (array[row][column] === "*") {
    array[row][column] = "*";
  } else if (count === 0) {
    array[row][column] = " ";
  } else {
    array[row][column] = count;
  }
};
