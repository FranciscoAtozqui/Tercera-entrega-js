const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const btnEnviar = document.querySelector('#enviar');
const p = document.getElementById('warning');
const nombreUsuario = document.querySelector('#name');
const saludo = document.querySelector('#saludo');
const usuario = {};

function guardarDatos() {
    usuario.nombre = nombreUsuario.value;
    usuario.mail = email.value;
    usuario.pass = password.value;
    localStorage.setItem('user', JSON.stringify(usuario));
}

btnEnviar.addEventListener('click', (e) => {
    if (email.value === "" || password.value === "" || nombreUsuario.value === "") {
        p.innerText = "Rellene los campos vacios!"
    } else {
        e.preventDefault();
        guardarDatos();
        window.location.href = "./pages/products.html";
    }
});

