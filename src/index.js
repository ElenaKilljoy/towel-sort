
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  let i = 0;
  let x = 0;
  let n = 0;
  if (typeof matrix === 'undefined') {
    result = [];
  } else {
      while(i < matrix.length) {
        if(i === 0 || i % 2 === 0) {
          while(x < matrix[i].length) {
            result.push(matrix[i][x]);
            x = x + 1;
          }
        } else if (i % 2 !== 0) {
            n = matrix[i].length - 1;
              while(n >= 0) {
                result.push(matrix[i][n]);
                n = n - 1;
              }
          }
      i = i + 1;
      x = 0;
      }
    }
  return result;
}
