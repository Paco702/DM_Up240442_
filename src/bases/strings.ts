console.log("Hola");
let name: string = "Francisco";
let lastName: string = "Perez";
let fullName: string = `${name} ${lastName}`;
/*
console.log("hola")
let name: string = "Francisco";
let Name2: string = 'comillas simples';


const name3: string = `
hola mi nombre es: 
${name}
`;
console.log(name3);
*/

/*
let  lineas: string = "====================";
let t:string = "=======TICKET======";
let Product1: string = "Pan";
let Product3: string = "Jugo";
let Product2: string = "Leche";
let Price1: number = 20;
let Price2: number = 35;
let Price3: number = 18;

const tiket: string = `
${lineas}
${t}
Producto: ${Product1}    ${Price1}
Producto: ${Product2}  ${Price2}
Producto: ${Product3}   ${Price3}
${lineas}
TOTAL:           ${Price1 + Price2 + Price3}
${lineas}
`;

console.log(tiket);
*/

/*
let  lineas: string = "====================";
let t:string = "=======TICKET======";
let Product1: string = "Pan";
let Product3: string = "Jugo";
let Product2: string = "Leche";
let Price1: number = 20;
let Price2: number = 35;
let Price3: number = 18;

const tiket: string = `
${lineas}
${t}
Producto: ${Product1}    ${Price1}
Producto: ${Product2}  ${Price2}
Producto: ${Product3}   ${Price3}
${lineas}
TOTAL:           ${Price1 + Price2 + Price3}
${lineas}
`;

console.log(tiket);
*/

// Declaración de los productos
let Product1: string = "Pan";
let Product3: string = "Jugo";
let Product2: string = "Leche";
let producto1: number = 20;
let producto2: number = 30;
let producto3: number = 12;

let total: number = producto1 + producto2 + producto3;

let descuento: number = total * 0.05;

let totalConDescuento: number = total - descuento;

// Impresión en el orden solicitado
console.log("productos :", Product1 + " " + "$" + producto1 + ", " + Product2 + " " + "$" + producto2 + ", " + Product3 + " " + "$" + producto3);
console.log("Total: ", total);
console.log("descuento: ", descuento);
console.log("Total a pagar con descuento: ", totalConDescuento);