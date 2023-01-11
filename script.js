//[1]-CARGO EN UN ARREGLO LAS IMAGENES. ESTE SERA EL ORDEN EN QUE SE MOSTRARAN  Y TENDRAN COINCIDENCIA CON LAS OPCIONES
let imagenes = ["L1letrag.jpg","L2ocasional.jpg","L3perseverar.jpg","L4bonito.jpg","L5signos.jpg", //LENGUA
                "M1triangulo.jpg","M2numero.jpg","M3angulo.jpg","M4multiplicar.jpg","M5fraccion.jpg", //MATEMATICAS
                "S1bandera.jpg","S2sanmartin.jpg","S3cabildo.jpg","S4mapa.jpg","S5escudo.jpg", //CIENCIAS SOCIALES
                "N1vaca.jpg","N2leon.jpg","N3planeta.jpg","N4pez.jpg","N5sistemasolar.jpg"]; //CIENCIAS NATURALES


//[2]-ARREGLO QUE GUARDA LA OPCION CORRECTA
let correcta = [1,0,2,0,1, //LENGUA
                1,0,2,0,1, //MATEMATICA
                1,0,2,0,1, //CIENCIAS SOCIALES
                1,0,2,0,1]; //CIENCIAS NATURALES


//[3]-ARREGLO QUE GUARDA LAS OPCIONES A MOSTRAR EN CADA JUGADA                
let opciones = [];


//[4]-CARGO EN EL ARREGLO "opciones" LAS OPCIONES A MOSTRAR EN CADA JUGADA
//PREGUNTAS LENGUA
opciones.push(["Es una letra vocal", "Es una letra consonante", "Ninguna de las anteriores"]);
opciones.push(["Es una palabra aguda", "Es una palabra grave", "Es una palabra esdrújula"]);
opciones.push(["Es un adjetivo", "Es un sustantivo", "Es un verbo"]);
opciones.push(["Es sinónimo de bello", "Es sinónimo de feo", "Ninguna de las anteriores"]);
opciones.push(["Son los signos de exclamación", "Son los signos de interrogación", "Ninguna de las anteriores"]);
//PREGUNTAS MATEMATICA
opciones.push(["Es un cuadrado", "Es un triángulo", "Es un círculo"]);
opciones.push(["Es un número natural", "Es un número negativo", "Es un número decimal"]);
opciones.push(["Es un ángulo obtuso", "Es un ángulo agudo", "Es un ángulo recto"]);
opciones.push(["3 x 7 = 21", "3 x 7 = 33", "3 x 7 = 25"]);
opciones.push(["A la pizza le falta 1/5 (un quinto)", "A la pizza le falta 1/6 (un sexto)", "A la pizza le falta 1/4 (un cuarto)"]);
//PREGUNTAS CIENCIAS SOCIALES
opciones.push(["Es la bandera de Perú", "Es la bandera de Argentina", "Es la bandera de Uruguay"]);
opciones.push(["Es José de San Martin", "Es Simón Bolivar", "Es Manuel Belgrano"]);
opciones.push(["Es el Obelisco de Buenos Aires", "Es la Casita de Tucumán", "Es el Cabildo de Buenos Aires"]);
opciones.push(["Es el mapa de Mendoza", "Es el mapa de Argentina", "Es el mapa de América"]);
opciones.push(["Es el escudo nacional de Paraguay", "Es el escudo nacional de Argentina", "Es el escudo nacional de Bolivia"]);
//PREGUNTAS CIENCIAS NATURALES
opciones.push(["Es un ser abiótico", "Es un ser biótico", "Ninguna de las anteriores"]);
opciones.push(["Es animal carnívoro", "Es un animal herbívoro", "Es es un animal omnívoro"]);
opciones.push(["Es la Luna", "Es el Sol", "Es el Planeta Tierra"]);
opciones.push(["Es un animal acuático", "Es un animal aéreo", "Es un animal terrestre"]);
opciones.push(["Es la Vía Láctea", "Es el Sistema Solar", "Ninguna de las anteriores"]);


//[5]-VARIABLE QUE GUARDA LA POSICION ACTUAL
let posActual = 0;


//[6]-VARIABLE QUE GUARDA LA CANTIDAD DE ACERTADAS HASTA EL MOMENTO
let cantidadAcertadas = 0;


//[7]-FUNCION QUE RESETEA LAS VARIABLES Y ACTIVA LAS PANTALLAS NECESARIAS
function comenzarTest(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarTest();
}


//[8]-FUNCION QUE CARGA LA SIGUIENTE IMAGEN Y SUS OPCIONES
function cargarTest(){
    //controla si se acabaron las imagenes
    if(imagenes.length <= posActual){
        terminarTest();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();
        document.getElementById("imgTest").src = "img/" + imagenes[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}


//[9]-FUNCION QUE LIMPIA LAS OPCIONES
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
}


//[10]-FUNCION QUE COMPRUEBA LA RESPUESTA
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        cantidadAcertadas++;
    }
    posActual++;
    //el tiempo que demora la pagina en cargar las otras opciones
    setTimeout(cargarTest,100); 
}


//[11]-FUNCION PARA TERMINAR EL TEST
function terminarTest(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = imagenes.length - cantidadAcertadas;
}


//[12]-FUNCION PARA VOLVER AL INICIO
function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}