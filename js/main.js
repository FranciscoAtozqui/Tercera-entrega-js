const camisetas = [
    { pais: "argentina", precio: 4000, imagen: "argentina.jpg" },
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
const saludo = document.querySelector("#saludo");

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

const guardar = document.querySelector("#guardarValor")


inputBuscar.addEventListener('input', (e) => {
    e.preventDefault();
    let busqueda = filtrarProducto(camisetas, inputBuscar.value.toLowerCase());
    cards.innerHTML = ""
    busqueda.forEach((el) => {
        const divCard = document.createElement('div');
        divCard.classList.add('cards');
        divCard.style.width = "18 rem";
        let = { imagen, pais, precio } = el
        const card = `
        <section class="container" id="container-cards">
            <div class="row cards-container d-flex justify-content-center">
                <div class="card col col-12 col-sm-10 col-md-8 col-lg-6 m-2" style="width: 20rem;">
                <img src="../img/${imagen}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Camiseta de ${pais}</h5>
                    <p class="card-text">Precio: ${precio}</p>
                    <a href="" class="btn btn-primary bg-dark" id="btnCarrito">Agregar al carrito<i class="fa-solid fa-cart-shopping"></i></a>
                </div>
                </div>
            </div>
        </section>`
        divCard.innerHTML = card;
        cards.append(divCard);
    })
})

