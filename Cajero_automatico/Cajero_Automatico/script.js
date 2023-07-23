console.log("Conectado");

function login() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario === "Mali" && contrasena === "1234" || usuario === "Gera" && contrasena === "1234" || usuario === "Maui" && contrasena === "1234") {
        window.location.href = "./main.html";
        return;
    }

    if (usuario === "" && contrasena === "") {
        alert("Ingrese datos");
        return; // Detener la ejecución si faltan datos
    }

    alert("Datos incorrectos, por favor corríjalos");
}
