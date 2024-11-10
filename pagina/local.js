function guardar_formulario1(){
    const nombre = document.getElementById("nombre").value;
    const presupuesto = document.getElementById("presupuesto").value;
    const cantArticulos = document.getElementById("cantArticulos").value;
    const direccion = document.getElementById("direccion").value;
    const boton_1 = document.getElementById("boton_1").checked;
    const boton_2 = document.getElementById("boton_2").checked;



     //cheked propiedad de radio buton para saber si fue selecionado, true:si  false:no
     // Creamos un objeto para almacenar los datos y luego subirlos al local
  const datosFormulario = {
    nombre: nombre,
    presupuesto: presupuesto,
    cantArticulos: cantArticulos ,
    direccion: direccion,
    boton_1: boton_1 ,
    boton_2: boton_2,
  };


       // Convertir el objeto a un string JSON y guardarlo en localStorage
        localStorage.setItem("formulario", JSON.stringify(datosFormulario));
        const formulario1 = JSON.parse(localStorage.getItem("formulario"));
        console.log(formulario1);

 
     
    
}

//si la uso por fuer genera error
    function irAotraPantalla() {
        window.location.href = 'productos.html';
     }
       
     function irAotraPantalla2() {
        window.location.href = 'carrito.html';
     }
     
     const boton = document.getElementById('comprar');

        boton.addEventListener('click', guardar_formulario1);
        boton.addEventListener('click',  function irAotraPantalla() {
            window.location.href = 'productos.html';
         });


        function limpiar_formulario1(){
            const nombre = document.getElementById("nombre").value="";
            const presupuesto = document.getElementById("presupuesto").value="";
            const cantArticulos = document.getElementById("cantArticulos").value="";
            const direccion = document.getElementById("direccion").value="";
            const boton_1 = document.getElementById("boton_1").checked=false;
            const boton_2 = document.getElementById("boton_2").checked=false;

        }

        