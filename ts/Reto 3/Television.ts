class Television extends Electrodomestico{

    private resolucion: number;
    private cuatroK: boolean;

    constructor(precioBase: number = 100, color: string = "blanco", consumoEnergetico: string = "F", peso: number = 5, resolucion: number = 20, cuatroK: boolean = false){
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.cuatroK = cuatroK;
    }

    get getResolucion(): number{
        return this.resolucion;
    }

    get getCuatroK(): boolean{
        return this.cuatroK;
    }

    precioTV(): number{
        let precioBase = super.precioTV();

        if (this.resolucion > 40){
        precioBase = precioBase + precioBase * 0.3;
        }

        if (this.cuatroK){
        precioBase = precioBase + 50;
        }

        return precioBase;
    }
}
