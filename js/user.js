const usuario = JSON.parse(localStorage.getItem("user"));
saludo.innerHTML = `
Hola ${usuario.nombre}`