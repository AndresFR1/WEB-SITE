 // Array para almacenar los mensajes
 var mensajes = [];

 // Función para mostrar los mensajes
 function mostrarMensajes() {
   var chatMessages = document.querySelector('.chat-messages');
   chatMessages.innerHTML = '';

   mensajes.forEach(function(mensaje, index) {
     var claseMensaje = (index % 2 === 0) ? 'user-message' : 'bot-message';
     var mensajeHTML = '<div class="message ' + claseMensaje + '">' + mensaje + '</div>';
     chatMessages.innerHTML += mensajeHTML;
   });
 }

 // Función para generar una respuesta
 function generarRespuesta(mensaje) {
   // Lógica para generar la respuesta
   var respuesta = "¡Porsupuesto!. Aqui esta la respuesta a tu pregunta: " + mensaje;
   return respuesta;
 }

 // Evento del botón "Enviar"
 var buttonSend = document.getElementById('button-send');
 buttonSend.addEventListener('click', function() {
   var inputMessage = document.querySelector('.form-control');
   var mensaje = inputMessage.value;

   // Agregar el mensaje al array
   mensajes.push(mensaje);

   // Mostrar los mensajes actualizados
   mostrarMensajes();

   // Generar y mostrar la respuesta
   var respuesta = generarRespuesta(mensaje);
   mensajes.push(respuesta);
   mostrarMensajes();

   // Limpiar el campo de texto
   inputMessage.value = '';
 });


























// // Array para almacenar los mensajes
// var mensajes = [];

// // Función para mostrar los mensajes
// function mostrarMensajes() {
//   var chatMessages = document.querySelector('.chat-messages');
//   chatMessages.innerHTML = '';

//   mensajes.forEach(function(mensaje) {
//     var mensajeHTML = '<div class="message">' + mensaje + '</div>';
//     chatMessages.innerHTML += mensajeHTML;
//   });
// }

// // Función para generar una respuesta
// function generarRespuesta(mensaje) {
//   // Lógica para generar la respuesta
//   var respuesta = "¡Hola! Soy un chatbot. Estoy aqui para ayudarte a resolver tus dudas: " + mensaje;
//   return respuesta;
// }

// // Evento del botón "Enviar"
// var buttonSend = document.getElementById('button-send');
// buttonSend.addEventListener('click', function() {
//   var inputMessage = document.querySelector('.form-control');
//   var mensaje = inputMessage.value;

//   // Agregar el mensaje al array
//   mensajes.push(mensaje);

//   // Mostrar los mensajes actualizados
//   mostrarMensajes();

//   // Generar y mostrar la respuesta
//   var respuesta = generarRespuesta(mensaje);
//   mensajes.push(respuesta);
//   mostrarMensajes();

//   // Limpiar el campo de texto
//   inputMessage.value = '';
// });























// // Array para almacenar los mensajes
// var mensajes = [];

// // Función para mostrar los mensajes
// function mostrarMensajes() {
//   var chatMessages = document.querySelector('.chat-messages');
//   chatMessages.innerHTML = '';

//   mensajes.forEach(function(mensaje) {
//     var mensajeHTML = '<div class="message">' + mensaje + '</div>';
//     chatMessages.innerHTML += mensajeHTML;
//   });
// }

// // Evento del botón "Enviar"
// var buttonSend = document.getElementById('button-send');
// buttonSend.addEventListener('click', function() {
//   var inputMessage = document.querySelector('.form-control');
//   var mensaje = inputMessage.value;

//   // Agregar el mensaje al array
//   mensajes.push(mensaje);

//   // Mostrar los mensajes actualizados
//   mostrarMensajes();

//   // Limpiar el campo de texto
//   inputMessage.value = '';
// });
