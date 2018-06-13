var users = [];
function Registro() {
    var pNombre = document.getElementById("pNombre");
    var pApellido = document.getElementById("pApellido");
    var Correo = document.getElementById("correo");
    var Clave = document.getElementById("clave");
    var Clave1 = document.getElementById("clave1");

    var user = {
        pNombre: pNombre.value,
        pApellido: pApellido.value,
        Correo: Correo.value,
        Clave: Clave.value,
        Clave1: Clave1.value

    }

    if (user.pNombre == "" || user.sApellido == ""  || user.Correo == "" ||  user.Clave == "" || user.Clave1 == "") {


        swal("ERROR", "Por favor llene los campos ", "error");

    } else if (user.Clave === user.Clave1) {
            users.push(user);
            localStorage.users = JSON.stringify(users);
            document.getElementById("form").reset();

            swal("FELICITACIONES", "Se ha registrado con éxito","success");
            location.href="index.html";

        } else {
        swal("ERROR!", "las contraseñas no coinciden", "error");

    }


}


function validate() {
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;

    var LocalStor = JSON.parse(localStorage.users);

    var traer = LocalStor.find(function (registradas) {
        return registradas.Correo === correo && registradas.Clave == clave

    });

    if (traer != null) {
        location.href = "index.html";
    } else {
        swal("Error", "La contraseña o el correo son incorrectas", "error")
    }


}









