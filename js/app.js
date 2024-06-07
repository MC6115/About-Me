let respuestasCorrectas = 0;
'use strict'

function Evaluación(){
    alert("Aquí tienes 5 preguntas, Responde Si/No a cada una");

    let pregunta1= prompt("1. Practique deportes por 9 años?").toLowerCase();
    let pregunta2= prompt("2. Estudie mi secundaria en E.E.U.U?").toLowerCase();
    let pregunta3= prompt("3. Alguna vez he trabajado?").toLowerCase();
    let pregunta4= prompt("4. Quiero continuar mis estudios?").toLowerCase();
    let pregunta5= prompt("5. Solo quiero ser programador?").toLowerCase();

    if(pregunta1==="no"){respuestasCorrectas++};
    if(pregunta2==="si"|| pregunta2==="sí"){respuestasCorrectas++};
    if(pregunta3==="si"|| pregunta3==="sí"){respuestasCorrectas++};
    if(pregunta4==="si"|| pregunta4==="sí"){respuestasCorrectas++};
    if(pregunta5==="no"){respuestasCorrectas++};

    Respuestas();
}
function Respuestas(){
    let mensaje;
    if (respuestasCorrectas === 5) {
        mensaje = "¡Excelente! Respondiste correctamente las 5 preguntas.";
    } else if (respuestasCorrectas >= 3) {
        mensaje = "¡Bien hecho! Respondiste correctamente " + respuestasCorrectas + " de 5 preguntas.";
    } else if (respuestasCorrectas >= 1) {
        mensaje = "Respondiste correctamente " + respuestasCorrectas + " de 5 preguntas. ¡Puedes mejorar!";
    } else {
        mensaje = "No respondiste ninguna pregunta correctamente. ¡Pero no te rindas!";
    }

    console.log(mensaje);
    alert(mensaje);
}