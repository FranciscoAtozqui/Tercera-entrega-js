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
    { id: 9, pais: "argentina-suplente", precio: 3100, imagen: "arg-suplente.jpg" },
    { id: 10, pais: "brasil-suplente", precio: 2800, imagen: "br-suplente.jpg" },
    { id: 11, pais: "portugal-suplente", precio: 2200, imagen: "port-suplente.jpg" },
];

//DOM

let inputBuscar = document.querySelector("#buscarProducto");
const cards = document.querySelector("#productosBuscados");
const guardar = document.querySelector("#guardarValor");
const btnCarrito = document.querySelector("#btn");
const saludo = document.querySelector("#saludo");
const vaciar = document.querySelector("#btnVaciar");
const carritoProductos = document.querySelector("#ProductosDelCarrito");

//FUNCIONES

function buscarProducto(arr, filtro) {
    const encontrarProducto = arr.find((el) => {
        return el.pais.includes(filtro);
    })
    return encontrarProducto;
}

function filtrarProducto(arr, filtro) {
    const filtrado = arr.filter((el) => {
        return el.pais.includes(filtro);
    })
    return filtrado;
}


//EVENTO
inputBuscar.addEventListener('input', (e) => {
    e.preventDefault();
    let busqueda = filtrarProducto(camisetas, inputBuscar.value.toLowerCase());
    cards.innerHTML = ""
    busqueda.forEach((el) => {
        const divCard = document.createElement('div');
        divCard.classList.add('cards');
        divCard.style.width = "18 rem";
        let = { imagen, pais, precio, id } = el
        const card = `
        <section class="container" id="container-cards">
            <div class="row cards-container d-flex justify-content-center">
                <div class="card card-titulares col col-12 col-sm-10 col-md-8 col-lg-6 m-2" style="width: 20rem;">
                <img src="../img/${imagen}" class="card-img-top mt-4" alt="">
                <div class="card-body">
                    <h5 class="card-title">Camiseta de ${pais}</h5>
                    <p class="card-text">Precio: $${precio}</p>
                    <button class="btn btn-primary bg-dark" id="btnCarrito btn${id}">Agregar al carrito<i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                </div>
            </div>
        </section>
        `
        divCard.innerHTML = card;
        cards.append(divCard);
    })
})


function cargarProductosAlCarrito() {
    fetch('../js/data.json')
        .then(res => res.json())
        .then(productos => {
            productos.forEach(producto => {
                carritoProductos.innerHTML = `
                    <aside id="ProductosDelCarrito" class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="card col col-12 col-sm-10 col-md-8 col-lg-6 m-2" style="width: 15rem;">
                                <h4 class="title-inicio text-center">Carrito</h4>
                                <img src= "../img/${producto.imagen}" class="card-img-top mt-4">
                            <div class="card-body">
                                <h5 class="card-title">Camiseta de ${producto.pais}</h5>
                                <p class="card-text oferta">Precio: $${producto.precio}</p>
                                <button class="btn btn-primary" id="btnVaciar">Vaciar<i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                            </div>
                        </div>
                    </aside>
                    `
            })
        });


}
    
btnCarrito.addEventListener('click', cargarProductosAlCarrito);









    


