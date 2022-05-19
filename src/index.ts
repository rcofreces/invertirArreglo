let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt(`Ingrese el número que desea ver en la posición ${indice}`)
  );
}

for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    `El número ingresado en la posición ${indice} es: ${arreglo[indice]}`
  );
}

for (indice = dimensionArreglo - 1; indice >= 0; indice--) {
  console.log(
    `Los números ingresados del último al primero son: posición ${indice} "${arreglo[indice]}"`
  );
}
