function saludo() {
  
      var nombre = prompt("Por favor, ingresa tu nombre:");
     
    if (nombre === null || nombre.trim() === "") 
      {
        alert ("Por favor, ingresa tu nombre.");
      } 
     
    else {   
    alert("¡Bienvenido, " + nombre + "!");
      }
    }
    saludo();