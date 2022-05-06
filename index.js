var Carro = /** @class */ (function () {
    //Constructor
    function Carro(marca, color, modelo, placa, linea, km, num_asientos) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.placa = placa;
        this.linea = linea;
        this.km = km;
        this.num_asientos = num_asientos;
    }
    Carro.prototype.getmodelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    //Metodos
    Carro.prototype.prender = function () {
        console.log('Estoy prendiendo....');
    };
    Carro.prototype.arrancar = function () {
        console.log('Estoy arrancando....');
    };
    Carro.prototype.acelerar = function () {
        console.log('Estoy acelerando....');
    };
    Carro.prototype.bloquear = function () {
        console.log('Estoy bloqueandome automáticamente....');
    };
    Carro.prototype.parar = function () {
        console.log('Estoy parando....');
    };
    Carro.prototype.girando = function () {
        console.log('Estoy girando....');
    };
    return Carro;
}());
//Creación de las instancias carro
var carroIngrid = new Carro('BMW', 'Negro', 'M4', 'AAA-123', 'Deportivo', 0, 5);
var carroJuliana = new Carro('TOYOTA', 'Gris', 'M4', 'BBB-123', 'Deportivo', 10, 6);
var numeroVolantes = Carro.numeroVolantes;
console.log(numeroVolantes);
carroIngrid.setModelo('M5');
console.log(carroIngrid, numeroVolantes);
// let carroJuliana = carroIngrid;
// carroIngrid.color = 'Verde';
// console.log(carroIngrid);
// console.log(carroJuliana);
// let num1 = 2;
// let num2 = num1;
// num1 = 5;
