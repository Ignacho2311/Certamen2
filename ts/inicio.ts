import jquery = require('jquery');
const $:JQueryStatic=jquery;

/*
let reset:any= document.getElementById("limpiar");
  let nombreCompleto:any=document.getElementById("nombreCompleto");
  let edad:any=document.getElementById("edad");
  let genero:any=document.getElementById("genero"); //ojo
  let fechaNacimiento:any=document.getElementById("fechaNacimiento");
  let region:any=document.getElementById("");
  let comuna:any=document.getElementById("");
  let dirección:any=document.getElementById("direccion");
  let teléfono:any=document.getElementById("telefono");
  let observacion:any=document.getElementById("observaciones");
  let habilidades:any=document.getElementById("habilidades");
  let campos:any=document.getElementById("campos");
 */

//VARIABLES
  let reset:any=document.getElementById("limpiar");

  let formulario:any=document.getElementById("formulario");
  let inputNombre:any = document.getElementById("nombreCompleto");
  let inputEdad:any = document.getElementById("edad");
  let inputDireccion:any=document.getElementById("direccion")
  let inputTelefono:any=document.getElementById("telefono")
  let inputObservacion:any=document.getElementById("observaciones")


//VALIDAR RADIOS
function validar_radio(){
  let opcion1:any = document.getElementById('hombre')
  let opcion2:any = document.getElementById('mujer')
  let flag=false;
  if(opcion1.checked || opcion2.checked){
    flag=true
  }else{
    window.alert("Seleccione un opcion");
  }
}

//FUNCION VALIDAR CHECKBOX
  function validar_checkbox(){
    let inputHabilidades:any = document.getElementById("habilidades")?.children;
    let e:any;
    let i=0;
    let al_menos_uno = false;
    while(i<inputHabilidades.length){
      if(inputHabilidades[i].tagName === 'INPUT' && inputHabilidades[i].type === 'checkbox'){
        if (inputHabilidades[i].checked){
          al_menos_uno= true;
        }
      }
      i++;
    }if(!al_menos_uno){
      window.alert("Selecciona al menos un checkbox");
      if(e.preventDefault()){
        e.preventDefault();
      } else {
        e.returnDefault = false;
      }
    }
}

  //JQUERY
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


//LIMPIAR
function LimpiarDatos(){
  let reset:any=document.getElementById("limpiar");
  reset.type="reset";
}
reset.addEventListener("click",LimpiarDatos);

formulario.addEventListener("submit",function(event:any){

  if(inputNombre.value === '' || inputEdad.value === '' ||inputDireccion.value === '' ||inputTelefono.value==='' || inputObservacion.value==='' || validar_radio() || validar_checkbox()){
    window.alert("Ingreso Incorrecto")
  }else{
    window.alert("Ingreso Correcto")
  }

},false)



let comunasRegion:any = {
  Valparaiso: ["Viña del Mar","Valparaíso","Quilpué","Villa alemana"],
  Santiago: ["Santiago","Quilicura","Recoleta","Vitacura","Independencia"]
}

let comuna:any = document.getElementById("comuna");
let idCiudad:any;
function  mostrarCiudadesPorRegion(value:any) {
  if(value.length==0) comuna.innerHTML = "<option></option>";
  else {
      let Comunas = "";
      for(idCiudad in comunasRegion[value]) {
          Comunas+="<option>"+comunasRegion[value][idCiudad]+"</option>";
      }
      comuna.innerHTML = Comunas;
  }
}

function mostrar(){
  let div = document.getElementById("campo");
  if(div?.style.display === 'none'){
  }else{
    div?.style.display === 'block';
  }

}











