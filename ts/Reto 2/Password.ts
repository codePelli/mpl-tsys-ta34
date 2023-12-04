class Password{

    private longitud: number;
    private pass: string = "";

    constructor(longitud: number = 8){
        
        this.longitud = longitud;
        this.randomPass();
    }

private randomPass(): void{

    let passCreada = "";
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let x = 0; x < this.longitud; x++){

        const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        passCreada += caracterAleatorio;
        }

        this.pass = passCreada;
    }

    public getPass(): string{

        return this.pass;
    }
}

let printPass = new Password();

console.log("Contraseña generada: " + printPass.getPass());
