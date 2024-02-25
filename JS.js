
const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegistro = document.querySelector(".form-informacion");
const formLogin = document.querySelector(".informacion");

btnSignIn.addEventListener("click", () => {
    formRegistro.style.display = "none";  
    formLogin.style.display = "block";     //Para ocultar y mostrar formularios//
});

btnSignUp.addEventListener("click", () => {
    formRegistro.style.display = "block";   
    formLogin.style.display = "none";       // registro pero inicio de sesion//
});

//  registrar usuario//
function registrarUsuario() {
    console.log("Usuario registrado exitosamente!");
}
