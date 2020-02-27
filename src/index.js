
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0 ) {
        return [];
    }
    matrix.map((el, index) => {
       if (index % 2 !== 0) {
        el.reverse();
       } 
       
       return el; 
    });
    return matrix.toString().split(',').map(el => {
        return +el;
    });
    
}
