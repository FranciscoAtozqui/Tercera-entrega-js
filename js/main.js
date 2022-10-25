const camisetas = [
    { pais: "argentina", precio: 4000, imagen: "argentina.jpg"},
    { pais: "alemania", precio: 3800, imagen: "alemania.jpg" },
    { pais: "belgica", precio: 3000, imagen: "belgica.jpg" },
    { pais: "brasil", precio: 3500, imagen: "brasil.jpg" },
    { pais: "francia", precio: 3700, imagen: "francia.jpg" },
    { pais: "inglaterra", precio: 3400, imagen: "inglaterra.jpg" },
    { pais: "uruguay", precio: 2800, imagen: "uruguay.jpg" },
    { pais: "portugal", precio: 3200, imagen: "portugal.jpg" },
]


let inputBuscar = document.querySelector("#buscarProducto");
const btnSearch = document.querySelector("#btnSearch");
const cards = document.querySelector("#productosBuscados");
const btnCarrito = document.querySelector("#btnCarrito");

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

inputBuscar.addEventListener('input', (e) => {
    e.preventDefault();
    let busqueda = filtrarProducto(camisetas, inputBuscar.value.toLowerCase());
    cards.innerHTML = `
    <section class="container" id="container-cards">
        <div class="row cards-container d-flex justify-content-center">
            <div class="card col col-12 col-sm-10 col-md-8 col-lg-6 m-2" style="width: 20rem;">
                <img src="../img/${busqueda[0].imagen}" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">Camiseta de ${busqueda[0].pais}</h5>
                <p class="card-text">Precio: ${busqueda[0].precio}</p>
                <a href="" class="btn btn-primary bg-dark" id="btnCarrito">Agregar al carrito <i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
        </div>
    </section>`
})
const guardar = document.querySelector("#guardarValor")

localStorage.setItem('clave', JSON.stringify(inputBuscar.value.toLowerCase()));

btnCarrito.addEventListener('click', () => {
    let guardarProductoEnCarrito = localStorage.getItem('clave');
    return guardarProductoEnCarrito;
})




















// function guardarProductos(carrito) {
//     busqueda = filtrarProducto(camisetas, inputBuscar.value.toLowerCase());
//     if (carrito === "localStorage") {
//         localStorage.setItem('clave', JSON.stringify(inputBuscar.value.toLowerCase()));
//     } else if (carrito === "sessionStorage"){
//         sessionStorage.setItem('clave', JSON.stringify(inputBuscar.value.toLowerCase()));
//     }
// }

// guardar.addEventListener('click', (e) => {
//     e.preventDefault();
//         let productoGuardado = guardarProductos("localStorage");
//         return productoGuardado;
//     })











    














// const nombre = document.querySelector("#name"),
//     nombreUsuario = document.querySelector("#user"),
//     email = document.querySelector("#email"),
//     password = document.querySelector("#password"),
//     enviar = document.querySelector("#enviar"),
// const datosUsuario = { usuario: email.value, pass: password.value };







// inputBuscar.addEventListener("change", () => {
//     let buscador = inputBuscar.value;
// })

// let productosFiltrados = camisetas.filter((item) =>
//     item.pais.includes(inputBuscar.value.toUpperCase())
// );






























