document.write('a grid of numbers');

document.write('<br>');
document.write('<br>');
let numberGrid = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

for (let i = 0; i < numberGrid.length; i++){
  for (let j = 0; j < numberGrid[i].length; j++){
    document.write(numberGrid[i][j]);
  }
  document.write("<br></br>")
}
