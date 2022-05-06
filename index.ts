class Carro {
  //Atributos de instancia
  private marca: string
  private color: string
  private modelo: string
  private placa: string
  private linea: string
  private km: number
  private num_asientos: number

  //Atributos de clase
  public static numeroVolantes: number

  //Constructor
  constructor (
    marca: string,
    color: string,
    modelo: string,
    placa: string,
    linea: string,
    km: number,
    num_asientos: number
  ) {
    this.marca = marca
    this.color = color
    this.modelo = modelo
    this.placa = placa
    this.linea = linea
    this.km = km
    this.num_asientos = num_asientos
  }

  public getmodelo (): string {
    return this.modelo
  }
  public setModelo (modelo: string): void {
    this.modelo = modelo
  }
  //Metodos
  prender (): void {
    console.log('Estoy prendiendo....')
  }

  arrancar (): void {
    console.log('Estoy arrancando....')
  }

  acelerar (): void {
    console.log('Estoy acelerando....')
  }

  bloquear (): void {
    console.log('Estoy bloqueandome automáticamente....')
  }

  parar (): void {
    console.log('Estoy parando....')
  }

  girando (): void {
    console.log('Estoy girando....')
  }
}

//Creación de las instancias carro

let carroIngrid = new Carro('BMW', 'Negro', 'M4', 'AAA-123', 'Deportivo', 0, 5)
let carroJuliana = new Carro('TOYOTA', 'Gris', 'M4', 'BBB-123', 'Deportivo', 10, 6);
let numeroVolantes = Carro.numeroVolantes
console.log(numeroVolantes)
carroIngrid.setModelo('M5')
console.log(carroIngrid, numeroVolantes)
// let carroJuliana = carroIngrid;
// carroIngrid.color = 'Verde';
// console.log(carroIngrid);
// console.log(carroJuliana);

// let num1 = 2;
// let num2 = num1;
// num1 = 5;
