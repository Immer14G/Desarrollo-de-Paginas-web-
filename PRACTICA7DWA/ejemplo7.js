var factura = {
    numero:650,
    cliente:"trasporte hernandez",
    vencimiento: {
        1:{
            fecha:"2022-01-01",
            importe:216
        },
        2:{
            fecha: new date ("2022-01-15"),
            importe:216
        },
        3:{
            fecha: new date ("2022-02-01"),
            importe:218
        },

    }
}

var numeroFactura = factura.numero;
var importeTercerVencimiento = facuta.vencimiento[3].importe
console.log("El importe del tercer vencimiento accede a " + importeTercerVencimiento)

