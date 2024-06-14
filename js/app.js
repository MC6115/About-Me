"use strict";
let respuestasCorrectas = 0;
let attempts = 4;
const Platos = [
  "ceviche",
  "cebiche",
  "lomo saltado",
  "hamburguesa",
  "sushi",
  "lasaña",
  "carne",
  "ramen",
  "tacos",
  "pho",
  "xiaolongbao",
];

const afirmacion = "Si";
const negacion = "No";

const preguntas = [
  "1. Practique deportes por 9 años?",
  "2. Estudie mi secundaria en E.E.U.U?",
  "3. Alguna vez he trabajado?",
  "4. Quiero continuar mis estudios?",
  "5. Solo quiero ser programador?",
];

function compararRespuesta(textoDePregunta) {
  const pregunta = prompt(textoDePregunta);
  if (afirmacion.toLowerCase() === pregunta.toLowerCase()) {
    alert("Acertaste");
    respuestasCorrectas++;
    console.log(respuestasCorrectas);
  } else {
    alert("Incorrecto");
    console.log("Incorrecto!");
  }
}

function accesos() {
  for (let i = 0; i < preguntas.length; +i++) {
    compararRespuesta(preguntas[i]);
  }
}

//

function Evaluación() {
  let PlatoEscogido = false;
  const Random = Number(Math.random().toFixed(1)) * 10;
  console.log(Random);
  alert("Aquí tienes 7 preguntas, Responde Si/No, O como se especifique");
  accesos();

  //let deporte = prompt("1. Practique deportes por 9 años?").toLowerCase();
  //let extranjero = prompt("2. Estudie mi secundaria en E.E.U.U?").toLowerCase();
  //let trabajo = prompt("3. Alguna vez he trabajado?").toLowerCase();
  //let estudio = prompt("4. Quiero continuar mis estudios?").toLowerCase();
  //let estprogram = prompt("5. Solo quiero ser programador?").toLowerCase();

  //if(pregunta1==="no"){respuestasCorrectas++}else{alert("Ops, Respuesta incorrecta")};
  //let pregunta1= prompt("1. Practique deportes por 9 años?").toLowerCase();
  //let pregunta2= prompt("2. Estudie mi secundaria en E.E.U.U?").toLowerCase();
  //if(pregunta2==="si"|| pregunta2==="sí"){respuestasCorrectas++}else{alert("Ops, Respuesta incorrecta")};
  //let pregunta3= prompt("3. Alguna vez he trabajado?").toLowerCase();
  //if(pregunta3==="si"|| pregunta3==="sí"){respuestasCorrectas++}else{alert("Ops, Respuesta incorrecta")};
  //let pregunta4= prompt("4. Quiero continuar mis estudios?").toLowerCase();
  //if(pregunta4==="si"|| pregunta4==="sí"){respuestasCorrectas++}else{alert("Ops, Respuesta incorrecta")};
  //let pregunta5= prompt("5. Solo quiero ser programador?").toLowerCase();
  //if(pregunta5==="no"){respuestasCorrectas++}else{alert("Ops, Respuesta incorrecta")};

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
  Respuestas();
}

function Respuestas() {
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
  // let Cuales=prompt("Respondiste correctamente a las pregutas" + );

  // if (respuestasCorrectas===7){
  //     mensaje = "¡Excelente! Respondiste correctamente las 7 preguntas!"
  // }else{
  //     if(respuestasCorrectas >= 4){
  //         mensaje = "¡Bien hecho! Respondiste correctamente " + respuestasCorrectas + " de 7 preguntas.";
  //     }else{
  //         if(respuestasCorrectas >= 1){
  //             mensaje = "Respondiste correctamente " + respuestasCorrectas + " de 7 preguntas. ¡Puedes mejorar!";
  //         }else{
  //             mensaje = "No respondiste ninguna pregunta correctamente. ¡Pero no te rindas!";
  //         }
  //     }
  // }

  console.log(mensaje);
  alert(mensaje);
}
