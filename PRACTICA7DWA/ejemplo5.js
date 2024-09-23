//iterar propiedades de un objeto
const producto ={
    nombre:"laptop",
    precio: 500,
    disponible: true
};

//uso del bucle para iterar sobre propiedade del objeto
for (let propiedad in producto) {
    console.log('${producto[propiedad]}');
}