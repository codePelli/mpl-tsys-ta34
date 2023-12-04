class Persona{

    nombre: string;
    edad: number;
    dni: string;
    sexo: string;
    peso: number;
    altura: number;
  
    constructor(nombre: string = "", edad: number = 0, dni: string, sexo: string = "H", peso: number = 0, altura: number = 0){

      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
    }
  }

  let marc = new Persona("Marc", 31, "12312312Y");
  let juanca = new Persona("Juanca", 21, "12332111R");
  let alejandro = new Persona("Alejandro", 25, "12332122X", "H", 80, 1.75);

  console.log(marc);
  console.log(juanca);
  console.log(alejandro);