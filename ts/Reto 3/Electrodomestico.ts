class Electrodomestico{

    private precioBase: number;
    private color: string;
    private consumoEnergetico: string;
    private peso: number;

    constructor(precioBase: number = 100, color: string = "blanco", consumoEnergetico: string = "F", peso: number = 5){

        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }

    get getPrecioBase(): number{

        return this.precioBase;
    }

    get getColor(): string{

        return this.color;
    }

    get getConsumoEnergetico(): string{

        return this.consumoEnergetico;
    }

    get getPeso(): number{

        return this.peso;
    }

    comprobarConsumoEnergetico(letra: string): string{
        let letrasValidas = ["A", "B", "C", "D", "E", "F"];
    
        return letrasValidas.indexOf(letra.toUpperCase()) !== -1
            ? letra.toUpperCase()
            : this.consumoEnergetico;
    }
    
    comprobarColor(color: string): string{
        let coloresValidos = ["blanco", "negro", "rojo", "azul", "gris"];
        return coloresValidos.indexOf(color.toLowerCase()) !== -1
            ? color.toLowerCase()
            : this.color;
    }
    

    precioTV(): number{

        let precio = this.precioBase;

        switch(this.consumoEnergetico){

            case 'A':
                precio += 100;
                break;
            case 'B':
                precio += 80;
                break;
            case 'C':
                precio += 60;
                break;
            case 'D':
                precio += 50;
                break;
            case 'E':
                precio += 30;
                break;
            case 'F':
                precio += 10;
                break;
            default:
                break;
        }

        if(this.peso >= 0 && this.peso < 20){
            precio += 10;
        }else if (this.peso >= 20 && this.peso < 50){
            precio += 50;
        }else if (this.peso >= 50 && this.peso < 80){
            precio += 80;
        }else if (this.peso >= 80){
            precio += 100;
        }

        return precio;
    }
}