define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
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
    var reset = document.getElementById("limpiar");
    var formulario = document.getElementById("formulario");
    var inputNombre = document.getElementById("nombreCompleto");
    var inputEdad = document.getElementById("edad");
    var inputDireccion = document.getElementById("direccion");
    var inputTelefono = document.getElementById("telefono");
    var inputObservacion = document.getElementById("observaciones");
    //VALIDAR RADIOS
    function validar_radio() {
        var opcion1 = document.getElementById('hombre');
        var opcion2 = document.getElementById('mujer');
        var flag = false;
        if (opcion1.checked || opcion2.checked) {
            flag = true;
        }
        else {
            window.alert("Seleccione un opcion");
        }
    }
    //FUNCION VALIDAR CHECKBOX
    function validar_checkbox() {
        var _a;
        var inputHabilidades = (_a = document.getElementById("habilidades")) === null || _a === void 0 ? void 0 : _a.children;
        var e;
        var i = 0;
        var al_menos_uno = false;
        while (i < inputHabilidades.length) {
            if (inputHabilidades[i].tagName === 'INPUT' && inputHabilidades[i].type === 'checkbox') {
                if (inputHabilidades[i].checked) {
                    al_menos_uno = true;
                }
            }
            i++;
        }
        if (!al_menos_uno) {
            window.alert("Selecciona al menos un checkbox");
            if (e.preventDefault()) {
                e.preventDefault();
            }
            else {
                e.returnDefault = false;
            }
        }
    }
    //JQUERY
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    //LIMPIAR
    function LimpiarDatos() {
        var reset = document.getElementById("limpiar");
        reset.type = "reset";
    }
    reset.addEventListener("click", LimpiarDatos);
    formulario.addEventListener("submit", function (event) {
        if (inputNombre.value === '' || inputEdad.value === '' || inputDireccion.value === '' || inputTelefono.value === '' || inputObservacion.value === '' || validar_radio() || validar_checkbox()) {
            window.alert("Ingreso Incorrecto");
        }
        else {
            window.alert("Ingreso Correcto");
        }
    }, false);

    
    var comunasPorRegion = {
        Valparaiso: ["Viña", "Valpocity"],
        Santiago: ["Santiago centro", "Pudahuel", "Las Condes"]
    };
    var comuna = document.getElementById("comuna");
    var region = document.getElementById("region");
    var idCiudad;
    function mostrarCiudadesPorRegion(value) {
        if (value.length == 0)
            comuna.innerHTML = "<option></option>";
        else {
            var opcionesDeComunas = "";
            for (idCiudad in comunasPorRegion[value]) {
                opcionesDeComunas += "<option>" + comunasPorRegion[value][idCiudad] + "</option>";
            }
            comuna.innerHTML = opcionesDeComunas;
        }
    }
    function resetSelection() {
        region.selectedIndex = 0;
        comuna.selectedIndex = 0;
    }
});
