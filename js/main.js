//OBJECT
const camisetas = [
    { id: 1, pais: "argentina", precio: 4000, imagen: "argentina.jpg" },
    { id: 2, pais: "alemania", precio: 3800, imagen: "alemania.jpg" },
    { id: 3, pais: "belgica", precio: 3000, imagen: "belgica.jpg" },
    { id: 4, pais: "brasil", precio: 3500, imagen: "brasil.jpg" },
    { id: 5, pais: "francia", precio: 3700, imagen: "francia.jpg" },
    { id: 6, pais: "inglaterra", precio: 3400, imagen: "inglaterra.jpg" },
    { id: 7, pais: "uruguay", precio: 2800, imagen: "uruguay.jpg" },
    { id: 8, pais: "portugal", precio: 3200, imagen: "portugal.jpg" },
    { id: 9, pais: "arg-suplente", precio: 3100, imagen: "arg-suplente.jpg" },
    { id: 10, pais: "brasil-suplente", precio: 2800, imagen: "br-suplente.jpg" },
    { id: 11, pais: "portugal-sup", precio: 2200, imagen: "port-suplente.jpg" },
];



//LLAMADA A DOM

let inputBuscar = document.querySelector("#buscarProducto");
const cards = document.querySelector("#productosBuscados");
const guardar = document.querySelector("#guardarValor");
const saludo = document.querySelector("#saludo");
const vaciar = document.querySelector("#vaciar");
const contenedorProductos = document.getElementById("productosDelCarrito")
const carrito = [];



//FUNCIONES
//BUSCARPRODUCTO

function buscarProducto(arr, filtro) {
    const encontrarProducto = arr.find((el) => {
        return el.pais.includes(filtro);
    })
    return encontrarProducto;
}

//FILTRAR PRODUCTO
function filtrarProducto(arr, filtro) {
    const filtrado = arr.filter((el) => {
        return el.pais.includes(filtro);
    })
    return filtrado;
}

//AGREGAR CARRITO
const agregarAlCarrito = (id) => {
    const producto = camisetas.find((producto) => producto.id === id);
    carrito.find((producto) => producto.id === id);

    carrito.push(producto);
    actualizarCarrito();
};


//ACTUALIZAR CARRITO
function actualizarCarrito() {
    let contenedor = '';
    carrito.forEach((producto) => {
        contenedor += `
            <div class="card col-xl-3 col-md-6 col-sm-12 card-titulares m-2">
                  <img src="../img/${producto.imagen}" class="card-img-top img-fluid py-3">
                  <div class="card-body text-center">
                      <h5 class="card-title"> Camiseta de ${producto.pais} </h5>
                      <p class="card-text oferta"> Precio: $ ${producto.precio} </p>
                      <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary">Eliminar del Carrito</button>
                  </div>
              </div>
        `;
    });

    contenedorProductos.innerHTML = contenedor;
    calcularTotalCompra();
}


//ELIMINAR CARRITO
const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
};

//VACIAR CARRITO
vaciar.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});


//EVENTO
//AGREGAR PRODUCTO AL CARRITO

fetch('../js/data.json')
    .then(res => res.json())
    .then(productos => {
        productos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.innerHTML = `
            <section class="container" id="container-cards">
            <div class="row cards-container d-flex justify-content-center">
                <div class="card card-titulares col col-12 col-sm-10 col-md-8 col-lg-6 m-2" style="width: 20rem;">
                <img src="../img/${producto.imagen}" class="card-img-top mt-4" alt="">
                <div class="card-body">
                    <h5 class="card-title">Camiseta de ${producto.pais}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <button class="btn btn-primary" id="boton${producto.id}">Comprar<i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                </div>
            </div>
        </section>`
            
            cards.appendChild(divProducto); 
            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', () => {
                agregarAlCarrito(producto.id);
                swal({
                    title: "Agregado al carrito correctamente",
                    icon: "success",
                });
            });
        });
    });

// COMPRA TOTAL

const totalCompra = document.getElementById('totalCompra');
const btnCompra = document.getElementById('btnComprar');

const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio;
    });
    totalCompra.innerHTML = '$' + total;
};

//FINALIZAR COMPRA


btnCompra.addEventListener('click', () => {
(carrito.length === 0) ?
    swal({
        title: "Error. El carrito está vacío!",
    })
    :
    swal({
         title: "Compra Exitosa!",
         text: "Precio: " + totalCompra.innerHTML,
         icon: "success",
    });
    carrito.splice(0, carrito.length);
    actualizarCarrito();
})






























    


