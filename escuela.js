var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //Constructor
    function User(email, nombre_completo, edad) {
        this.email = email;
        this.nombre_completo = nombre_completo;
        this.edad = edad;
    }
    //Getters and Setters
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getNombreCompleto = function () {
        return this.nombre_completo;
    };
    User.prototype.getEdad = function () {
        return this.edad;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setNombreCompleto = function (nombre_completo) {
        this.nombre_completo = nombre_completo;
    };
    User.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    //Métodos adicionales
    User.prototype.toString = function () {
        return "nombre: ".concat(this.nombre_completo, " email: ").concat(this.email, " edad: ").concat(this.edad, "\n        Naci\u00F3 en el a\u00F1o ").concat(User.convertToDate(this.edad), "\n        ");
    };
    User.convertToDate = function (edad) {
        return User.CURRENT_YEAR - edad;
    };
    //Atributo de clase
    User.institucion_educativa = 'Academia Geek';
    User.CURRENT_YEAR = 2022;
    return User;
}());
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    //Atributos de clase
    //Constructor
    function Profesor(email, nombre_completo, edad, codigo) {
        var _this = _super.call(this, email, nombre_completo, edad) || this;
        _this.codigo = codigo;
        return _this;
    }
    //Getters and Setters
    Profesor.prototype.getCodigo = function () {
        return this.codigo;
    };
    Profesor.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    //Otros metodos
    Profesor.prototype.toString = function () {
        return "nombre: ".concat(this.nombre_completo, " email: ").concat(this.email, " edad: ").concat(this.edad, "\n        Naci\u00F3 en el a\u00F1o ").concat(User.convertToDate(this.edad), " codigo: ").concat(this.codigo, "\n        ");
    };
    return Profesor;
}(User));
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(email, nombre_completo, edad, identificacion) {
        var _this = _super.call(this, email, nombre_completo, edad) || this;
        _this.identificacion = identificacion;
        return _this;
    }
    Estudiante.prototype.toString = function () {
        return "nombre: ".concat(this.nombre_completo, " email: ").concat(this.email, " edad: ").concat(this.edad, "\n        Naci\u00F3 en el a\u00F1o ").concat(User.convertToDate(this.edad), " identificacion: ").concat(this.identificacion, "\n        ");
    };
    return Estudiante;
}(User));
var user1 = new User('villegassamuel25@gmail.com', 'Samuel Villegas', 20);
var Profesor1 = new Profesor('profesor@gmail.com', 'Leisy Vasquez', 18, 20201);
var Estudiante1 = new Estudiante('estudiante@gmail.com', 'David Giraldo', 27, '213081290');
console.log(user1.toString());
console.log(Profesor1.toString());
console.log(Estudiante1.toString());
console.log(typeof User);
