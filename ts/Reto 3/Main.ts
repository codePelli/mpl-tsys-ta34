class Main{
    static main(): void{

        let electrodomesticos: Electrodomestico[] = new Array(10);

        electrodomesticos[4] = new Electrodomestico();
        electrodomesticos[5] = new Electrodomestico(120, "blanco", "C", 15);
        electrodomesticos[6] = new Electrodomestico(80, "rojo", "F", 10);
        electrodomesticos[7] = new Electrodomestico(60, "azul", "A", 5);
        electrodomesticos[8] = new Electrodomestico(90, "negro", "E", 30);
        electrodomesticos[9] = new Electrodomestico(110, "gris", "B", 40);
        electrodomesticos[0] = new Lavadora(150, "rojo", "A", 30, 40);
        electrodomesticos[1] = new Lavadora(120, "negro", "C", 25, 25);
        electrodomesticos[2] = new Television(200, "azul", "B", 35, 50, true);
        electrodomesticos[3] = new Television(180, "gris", "D", 28, 30, false);

        let precioElectrodomestico = 0;
        let precioTotalLavadoras = 0;
        let precioTotalTelevisiones = 0;

        for (const electrodomestico of electrodomesticos){
        let totalPrecio = electrodomestico.precio();

        precioElectrodomestico = precioElectrodomestico + totalPrecio;

        if(electrodomestico instanceof Lavadora){
            precioTotalLavadoras = precioTotalLavadoras + totalPrecio;
        }else if(electrodomestico instanceof Television){
            precioTotalTelevisiones = precioTotalTelevisiones + totalPrecio;
        }

        console.log("Precio total: " + totalPrecio);
    }
    
    console.log("Precio total electrodomestico: " + precioElectrodomestico);
    console.log("Precio total lavadora: " + precioTotalLavadoras);
    console.log("Precio total television: " + precioTotalTelevisiones);
    
    }
}

Main.main();