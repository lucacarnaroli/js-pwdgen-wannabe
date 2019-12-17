alert('Hello');
var nome = prompt('Come ti chiami?');
console.log(nome);
var cognome = prompt('il tuo cognome?');
console.log(cognome);
var colore = prompt('qual è il tuo colore preferito ?');
console.log(colore);
var annoAttuale = 19;
console.log(annoAttuale);

document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('colore').innerHTML = colore;
document.getElementById('annoAttuale').innerHTML = annoAttuale;
