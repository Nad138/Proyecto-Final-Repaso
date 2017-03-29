window.onload = function(){
    var  coders = [];
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var correo = document.getElementById("correo");
    var clave = document.getElementById("clave");

    function registrar(evento){
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var correo = document.getElementById("correo").value;
      var clave = document.getElementById("clave").value;

      function Usuario(nombre, apellido, correo, clave){
              this.nombre = nombre;
              this.apellido = apellido;
              this.correo = correo;
              this.clave = clave;
       };

        var nuevo = new Usuario(nombre, apellido, correo, clave);
          coders.push(nuevo);
              if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 && clave.length!=0){
                localStorage.setItem("nuevoRegistro", JSON.stringify(new Usuario(nombre, apellido, correo, clave)));
                window.location="";
                 }
              else{
                  var mensaje = document.getElementById("alerta");
                   mensaje.innerText = "*Todos los campos son obligatorios"
                 }
            }
    document.getElementById("nuevo").addEventListener("click", registrar)
    var letras = function(e){
       var tecla = e.keyCode;
       if((tecla>= 97 && tecla<=122) || (tecla >=65 && tecla <= 90) || tecla==39 || tecla==32){
            this.nextElementSibling.nextElementSibling.innerText= " ";
             return true;
          }
       else{
            this.nextElementSibling.nextElementSibling.innerText= "*Campo sólo permite letras";
             return false;
          }
    }
    var email = function(){
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //  w: alfanumérico, acepta . y -, y el ultimo sólo dos o tres letras.
    if(!mail.test(correo)){
            this.nextElementSibling.nextElementSibling.innerText = "*El correo ingresado no es un formato válido";
          }
    }
    var passw = function(){
    var password = /^\w{6,20}$/;
    if (!password.test(clave)){
          this.nextElementSibling.nextElementSibling.innerText = "*La contraseña debe tener entre 6 y 20 caracteres";
        }
      }
  nombre.onkeypress = letras;
  apellido.onkeypress = letras;
  correo.onkeypress = email;
  clave.onkeypress = passw;

}
