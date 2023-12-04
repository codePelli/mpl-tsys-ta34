class Lavadora extends Electrodomestico{

    private carga: number;

    constructor(precioBase: number = 100, color: string = "blanco", consumoEnergetico: string = "F", peso: number = 5, carga: number = 5){
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }

    get getCarga(): number{
        return this.carga;
    }

    precioTV(): number{
        let precioBase = super.precioTV();

        if(this.carga > 30){
            return precioBase + 50;
        }

        return precioBase;
    }
}