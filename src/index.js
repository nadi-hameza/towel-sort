
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let massive = [];
  if (matrix === undefined) {
    return massive;
  }
  else {
  for (let i = 1; i <matrix.length; i+= 2) {
   matrix[i].reverse();  
  }
  
  for (let j = 0; j < matrix.length; j++) {
    let qwert = matrix[j];
    massive = massive.concat(qwert);
  }

  return massive;
}
}
