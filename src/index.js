

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length == 0) return [];

  else{
    for(let i = 0; i<matrix.length; i++){
      if(i%2 !=0) matrix[i].reverse();
    }
    return matrix.reduce((acc, val) => acc.concat(val), []);
  }
}
