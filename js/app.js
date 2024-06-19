"use strict";
let respuestasCorrectas = 0;
let attempts = 4;
const Platos = ["ceviche","cebiche","lomo saltado","hamburguesa","sushi","lasaña","carne","ramen","tacos","pho","xiaolongbao",];

const afirmacion = "Si";

const preguntas = ["1. Practique deportes por 16 años?","2. Estudie mi secundaria en E.E.U.U?","3. Alguna vez he trabajado?","4. Quiero continuar mis estudios?","5. Quiero hacer otras cosas aparte de programar?",];

function compararRespuesta(textoDePregunta) {
  const pregunta = prompt(textoDePregunta);
  if (afirmacion.toLowerCase() === pregunta.toLowerCase()) {
    alert("Acertaste");
    respuestasCorrectas++;
  } else {
    alert("Incorrecto");
  }
}
function ciclar() {
  for (let i = 0; i < preguntas.length; +i++) {
    compararRespuesta(preguntas[i]);
  }
}
function preguntar() {
  let PlatoEscogido = false;
  const Random = Number(Math.random().toFixed(1)) * 10;
  console.log(Random);
  alert("Aquí tienes 7 preguntas, Responde Si/No, O como se especifique");
  ciclar();
  let pregunta6 = prompt(
    "6. Algunos de mis platos favoritos te gusta? dime cual?"
  ).toLowerCase();
  for (let i = 0; i < Platos.length; i++) {
    if (Platos[i] === pregunta6) {
      PlatoEscogido = true;
      break;
    }
  }
  if (PlatoEscogido === true) {
    alert("¡Mmm, buena elección!");
    respuestasCorrectas++;
  } else {
    alert("Bueno, tener gustos distintos no es malo.");
  }
  for (let i = 0; i < attempts; i++) {
    let AttemptsFaltantes = attempts - i;
    let pregunta7 = Number(
      prompt(
        "7. Adivina el número del 0 al 9. Tienes " +
          AttemptsFaltantes +
          " intentos."
      )
    );
    if (pregunta7 === Random) {
      alert("¡Número correcto!");
      respuestasCorrectas++;
      break;
    } else if (i < attempts - 1) {
      alert(
        "Número incorrecto, te quedan " + (AttemptsFaltantes - 1) + " intentos"
      );
    } else {
      alert("Te quedaste sin intentos. El número correcto era " + Random + ".");
    }
  }
  evaluación();
}
function evaluación() {
  let mensaje;
  if (respuestasCorrectas === 7) {
    mensaje = "¡Excelente! Respondiste correctamente las 7 preguntas!";
  } else if (respuestasCorrectas >= 4) {
    mensaje =
      "¡Bien hecho! Respondiste correctamente " +
      respuestasCorrectas +
      " de 7 preguntas.";
  } else if (respuestasCorrectas >= 1) {
    mensaje =
      "Respondiste correctamente " +
      respuestasCorrectas +
      " de 7 preguntas. ¡Puedes mejorar!";
  } else {
    mensaje =
      "No respondiste ninguna pregunta correctamente. ¡Pero no te rindas!";
  }
  respuestasCorrectas = 0;
  alert(mensaje);
}
