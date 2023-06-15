let arr_venta = [];

function btn_entrar(){

    let numero_venta = document.getElementById("numero_venta");

    let venta = numero_venta.value;

        arr_venta.push(venta);

        console.log(arr_venta);

        //ARREGLO EN JSON - STORAGE

        let arreglo_JSON = JSON.stringify(arr_venta);

        localStorage.setItem("arr_venta", arreglo_JSON);

        if ( numero_venta.value >= 1 ) {

            console.log("Bienvenida al sistema. Número de venta: " + numero_venta.value);

            let parrafo = document.createElement("h4");
            parrafo.innerText = "Bienvenida al sistema. Número de venta: " + numero_venta.value;
            sistema.append(parrafo);
        
        }
        
        else if ( numero_venta.value == 0 ){
            console.log("A finalizado el día de ventas");

            let parrafo = document.createElement("h5");
            parrafo.innerText = "A finalizado el día de ventas";
            sistema.append(parrafo);
        }
}
     

let entrar_sistema = document.getElementById("entrar_sistema");

entrar_sistema.addEventListener("click", btn_entrar);



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

localStorage.setItem("arr_productos", productos);

console.log(localStorage.getItem("arr_productos"));

let productos_JSON = JSON.stringify(productos);

console.log(productos_JSON);

localStorage.setItem("productos", productos_JSON);

let recuperando_productos = localStorage.getItem("productos");

console.log(recuperando_productos);

recuperando_productos = JSON.parse(recuperando_productos);
console.log(recuperando_productos);


/* 


//DOM

let titulo_principal = document.getElementById("titulo_principal");

titulo_principal.innerHTML = "<h1>Estas accediendo a descuento de uñas para clientas antiguas</h1>";

let numero_vent = document.getElementById("venta");

STORAGE
localStorage.setItem("numero_venta", 3);

let numero_venta = localStorage.getItem("numero_venta");

console.log(numero_venta);

localStorage.removeItem("");

localStorage.clear();
*/