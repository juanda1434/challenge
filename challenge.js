const ordenarDiagonal = (matriz) => {
  const limiteDiagonal = matriz.length < matriz[0].length ? matriz.length : matriz[0].length;
  const diagonal = matriz.reduce((acc, ele, i) => [...acc, ele[i]], []).slice(0, limiteDiagonal).sort((a, b) => a - b);  
  const zero = diagonal.findIndex((a) => a == 0 || a > 0);  
  const cantidadZero = diagonal.filter((a) => a == 0).length;  
  const final = [
    ...diagonal.slice(zero + cantidadZero, diagonal.length),
    ...diagonal.slice(zero, zero + cantidadZero),
    ...diagonal.slice(0, zero),
  ];  
const impresion = matriz.reduce((acc,ele,i)=>{
  return acc+"|"+ele.reduce((acc,ele,j)=>acc+ ((i==j && i<limiteDiagonal ) ? final[i]+" " :"** "),"")+"|\n";
},"")
console.log(impresion);
};

const matriz = [
  [-1, -1, 3, 2, 4, 2],
  [1, 1, 4, 5, 7, 8],
  [0, 2, -2, 5, 6, 7],
  [1, -1, 3, 2, 4, 2],
  [1, 3, 4, 5, 0, 8],
  [0, 2, 3, 5, 6, 7],
  [1, -1, 3, 2, 4, 2],
  [1, 3, 4, 5, 7, 8],
  [0, 2, 3, 5, 6, 7],
];
const matriz2 = [
  [-2, -1, 3, 2, 4, 2, 3],
  [1, -1, 4, 5, 7, 8, 3],
  [0, 2, -4, 5, 6, 7, 3],
  [1, -1, 3, -6, 4, 2, 3],
  [1, -1, 3, 3, 3, 2, 3],
  [1, -1, 3, 3, 4, 9, 3],
  [1, -1, 3, 3, 4, 2, 21],
 
];

const matriz3 = [
  [0, -1, 3, 2, 4],
  [1, 9, 4, 5, 7],
  [0, 2, 20, 5, 6],
  [1, -1, 3, -10, 4],
  [1, -1, 3, 3, 0],
  [1, -1, 3, 3, 4],
  [1, -1, 3, 3, 4],
 
];

ordenarDiagonal(matriz);
ordenarDiagonal(matriz2);
ordenarDiagonal(matriz3);