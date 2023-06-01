
// Array con objetos

class Producto{
    constructor(nombre, codigo, precio, costo_neto, ganancia){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.costo_neto = costo_neto;
        this.ganancia = ganancia;
    }

    mostrar_codigo(){
        console.log("Codigo del producto:" + "" + this.codigo);
    }

    cantidadGanancia(){
        this.ganancia = this.precio - this.costo_neto;
    }
}

const productos = [];
productos.push(new Producto ("lima 180 rosada", "CD2672", 1000, 300));
productos.push(new Producto ("lima 280", "CD0395", 2400, 1200));
productos.push(new Producto ("serum cabello", "SC9475", 16000, 10000));
productos.push(new Producto ("uñas impress", "UO9274", 11900, 6800));

console.log(productos);
console.log(productos[2]);
productos[2].mostrar_codigo();

for (const producto of productos){
    producto.cantidadGanancia();

    console.log(producto.ganancia);
}

console.log(productos);

//Descuento cliente 


function descuento_cliente(clienta_antigua){

    const valor_producto = productos[3].precio;
    let cantidad_producto = prompt("Ingrese la cantidad que desea comprar");

    if (clienta_antigua == "si"){
        
            if ( cantidad_producto == 1 ){
                console.log("Total a pagar:", valor_producto);
            }

            else if ( cantidad_producto == 2 ){
                descuento = (valor_producto * cantidad_producto ) * 0.1;
                console.log("Tu descuento es del 10%. Total a pagar:", (valor_producto * cantidad_producto ) - descuento);
            }

            else if ( cantidad_producto >= 3 && cantidad_producto <= 5 ){
                descuento = (valor_producto * cantidad_producto ) * 0.15;
                console.log("Tu descuento es del 15%. Total a pagar:", (valor_producto * cantidad_producto ) - descuento);
            }

            else if ( cantidad_producto >= 6 && cantidad_producto <= 100 ){
                descuento = (valor_producto * cantidad_producto ) * 0.20;
                console.log("Tu descuento es del 20%. Total a pagar:", (valor_producto * cantidad_producto ) - descuento);
            }
            
    }
    else if ( clienta_antigua != "si"){
        if ( cantidad_producto >= 1 ){
            console.log("Debe haber comprado antes para acceder al descuento de tienda. Total a pagar:", 
            valor_producto * cantidad_producto);
        }
    }
}

//

console.log("Bienvenido a tienda Beauty");
console.log("Estas accediendo a descuento de uñas para clientas antiguas");
let numero_venta = prompt("Ingresar número de venta o cerrar día con 0");

while ( numero_venta >= 1 ) {

    console.log("Número de venta: ", numero_venta);

    let clienta_antigua = prompt("Escriba 'si' para ingresar a descuento de clienta antigua");

    descuento_cliente ( clienta_antigua );

    numero_venta = prompt("Ingresar número de venta o cerrar día con 0");

}

if ( numero_venta == 0 ){
    console.log("A finalizado el día de ventas");
}





