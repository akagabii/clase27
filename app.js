const {sumar,restar,multiplicar,dividir} = require('./modules/calculadora')
const comando = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];

switch (comando) {
    case "sumar":
        console.log(sumar(numeroA,numeroB));
        break;
    case "restar":
        console.log(restar(numeroA,numeroB));
        break;
    case "multiplicar":
        console.log(multiplicar(numeroA,numeroB));
        break;
    case "dividir":
        console.log(dividir(numeroA,numeroB));
        break;
    case "undefined":
        console.log("Tenes que ingresar un comando");
        break;
    default:
        console.log("El comando es incorrecto");
        break;
}
