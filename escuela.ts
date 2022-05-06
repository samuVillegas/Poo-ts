class User {
  //Atributos de instancia
  protected email: string
  protected nombre_completo: string
  protected edad: number

  //Atributo de clase
  public static institucion_educativa = 'Academia Geek'
  private static CURRENT_YEAR = 2022

  //Constructor
  constructor (email: string, nombre_completo: string, edad: number) {
    this.email = email
    this.nombre_completo = nombre_completo
    this.edad = edad
  }

  //Getters and Setters
  public getEmail (): string {
    return this.email
  }

  public getNombreCompleto (): string {
    return this.nombre_completo
  }

  public getEdad (): number {
    return this.edad
  }

  public setEmail (email: string): void {
    this.email = email
  }

  public setNombreCompleto (nombre_completo: string): void {
    this.nombre_completo = nombre_completo
  }

  public setEdad (edad: number): void {
    this.edad = edad
  }

  //Métodos adicionales
  public toString (): string {
    return `nombre: ${this.nombre_completo} email: ${this.email} edad: ${
      this.edad
    }
        Nació en el año ${User.convertToDate(this.edad)}
        `
  }

  protected static convertToDate (edad: number): number {
    return User.CURRENT_YEAR - edad
  }
}

class Profesor extends User {
  // Atributos de instancia
  private codigo: number

  //Atributos de clase

  //Constructor
  constructor (
    email: string,
    nombre_completo: string,
    edad: number,
    codigo: number
  ) {
    super(email, nombre_completo, edad)
    this.codigo = codigo
  }

  //Getters and Setters
  public getCodigo (): number {
    return this.codigo
  }

  public setCodigo (codigo: number): void {
    this.codigo = codigo
  }

  //Otros metodos
  public toString (): string {
    return `nombre: ${this.nombre_completo} email: ${this.email} edad: ${
      this.edad
    }
        Nació en el año ${User.convertToDate(this.edad)} codigo: ${this.codigo}
        `
  }
}

class Estudiante extends User {
  public identificacion: string

  constructor (
    email: string,
    nombre_completo: string,
    edad: number,
    identificacion: string
  ) {
    super(email,nombre_completo,edad);
    this.identificacion = identificacion;
  }

  public toString (): string {
    return `nombre: ${this.nombre_completo} email: ${this.email} edad: ${
      this.edad
    }
        Nació en el año ${User.convertToDate(this.edad)} identificacion: ${this.identificacion}
        `
  }

}

let user1 = new User('villegassamuel25@gmail.com', 'Samuel Villegas', 20)
let Profesor1 = new Profesor('profesor@gmail.com', 'Leisy Vasquez', 18, 20201)
let Estudiante1 = new Estudiante('estudiante@gmail.com', 'David Giraldo', 27, '213081290')
console.log(user1.toString())
console.log(Profesor1.toString())
console.log(Estudiante1.toString())


class Repositorio {
    public create(nombre:string) {
        console.log('Metodo implementado')
    }
    public delete(id:number) {
        console.log('Metodo implementado')
    }
}

class RepositorioPostgres extends Repositorio{
    public create(nombre: string): void {
        //INSERT INTO .....
        console.log(`Se creo el registro con nombre ${nombre}`)
    }
}

class RepositorioMongo extends Repositorio{
    public create(nombre: string): void {
        //INSERT IN MONGO .....
        console.log(`Se creo el registro con nombre ${nombre}`)
    }
}

const BD = 'POSTGRES';
let repositorio;
if(BD === 'POSTGRES'){
    repositorio = new RepositorioPostgres();
}else {
    repositorio = new RepositorioMongo();
}

repositorio.create('Samuel')