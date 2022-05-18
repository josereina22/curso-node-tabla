const fs = require('fs');

console.clear();

const numero = 6;
let salida = '';

console.log('====================');
console.log(`     TABLA DEL : ${ numero }`);
console.log('====================');


for (let i = 1 ; i <= 10; i++) {
    salida += `${ numero } X ${ i } = ${ i * numero }\n`;
}

console.log(salida);

/*fs.writeFile(`tabla-${ numero }.txt`, salida, (err) => {
  if (err) throw err;

  console.log(`tabla-${ numero }.txt Creado`);

});*/

fs.writeFileSync(`tabla-${ numero }.txt`, salida);
console.log(`tabla-${ numero }.txt Creado`);