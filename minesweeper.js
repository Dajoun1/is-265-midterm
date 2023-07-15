//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  // todo: implement
  const rows = input.length;
  const cols = input[0] ? input[0].length : 0;

  if (rows === 0 || cols === 0) {
    return input;
  }

  const output = [];

  const mine = (row, col) => {
    if (row >= 0 && row < rows && col >= 0 && col < cols && input[row][col] === '*') {
      return true;
    } else {
    return false;
    }
  };

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      if (input[i][j] === '*') {
        row.push('*');
      } else {
        let count = 0;
        if (mine(i - 1, j - 1)) count++;
        if (mine(i - 1, j)) count++;
        if (mine(i - 1, j + 1)) count++;
        if (mine(i, j - 1)) count++;
        if (mine(i, j + 1)) count++;
        if (mine(i + 1, j - 1)) count++;
        if (mine(i + 1, j)) count++;
        if (mine(i + 1, j + 1)) count++;
        row.push(count === 0 ? ' ' : count.toString());
      }
    }
    output.push(row.join(''));
  }

  return output;
};


  

/*

check around in bounds


  if (input[i] !== undefined) {
    if (j < input[i].length && j >= 0) {

    }
  }
*/