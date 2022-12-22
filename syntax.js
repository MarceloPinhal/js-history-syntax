// Exemple


// const goToUpgrade = function(student, cbPrintMessage, greetingsList, studentProperties){
//     // bloque de código que se ejecuta
//     console.log(studentProperties.saludo + ' soy ' + student);
//     console.log('Quiero aprender programación, así que');
//     studentProperties.pagar();
//     console.log('Después de pagar me he quedado con la cartera a ' + studentProperties.cartera[0]);
//     console.log('Pero después que nos explotara la cabeza en este ejercicio hemos acabado bien porque...');
//     cbPrintMessage();
//     console.log('Y después de terminar el bootcamp nos vamos a la casa rural de cervecitas');
//     console.log('Fin de la historia!!! ' + greetingsList[0]);
// }

// goToUpgrade('developer', function() {
//     console.log('Somos unos cracks');
// }, ['adios'], {
//     saludo: 'Hola',
//     cartera: [0, 5, 0.5],
//     pagar: function() {
//         console.log('Pago el bootcamp');
//     },
// });








// Ejercicio. Define la función.

const pasarLaNavidad = function(badGuy, christmasRoutine,randomCharacter,christmasObject,printEnd){
console.log(`Oye Marcelo, como ha sido tu finde? Ufff, tuve un sueño bastante raro....`);
console.log(`Soñé que estaba en casa y...`);
christmasRoutine[1]();
console.log(`Imagina que uno de ellos era ${badGuy} y yo estaba ${christmasRoutine[0]}`);
console.log(`Adémas era Navidad y ${christmasRoutine[2]} Portugal ${christmasRoutine[3]} ${christmasObject.dia}`);
console.log(`Y adivina quién vino a salvarme? ${randomCharacter}!!`) 
console.log(`Y yo le preguntaba.. pero ${randomCharacter} qué haces aqui? Ahora no tengo tiempo para te explicar...`) 
console.log(`Estaba a ${christmasObject.medioDia} en una  ${christmasObject.noche} y he decidido venir a tu casa convidarte para algo...`);
console.log(`Quieres ir de vacaciones al ${christmasObject.destinoVacaciones[2]}? Hombré! Claro`);
console.log(`Aunque..`) 
christmasObject.function()
console.log(`este ano ya estén cerradas. No pasa nada, eres una leyenda ${randomCharacter}`) 
console.log(`Qué sueño más friki. La programacion me esta volviendo loco. ${printEnd()}`)
}


pasarLaNavidad('grinch', [
    'Solo en casa',
    function() {
        console.log('AaRrrrGgggggg ¡Llegan los ladrones!')
    },
    'Como vivo en', // ¿Santa o Reyes magos?
    'Recibimos los regalos el día']
, 'Michael Knight', {
    medioDia: 'Comer con los amigos',
    dia: 24,
    noche: 'Cena familiar',
    destinoVacaciones: [
        'Honolulu',
        'Polo Norte',
        'Caribe',
        'Torrevieja',
        'Badajoz',
    ],
        function() {
        console.log('Mis vacaciones');
        
    },        
    },
 function() {
    return 'Fin de la Historia';
}, );
