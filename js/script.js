//lista cognomi
var lista = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
//mi aggancio all'html
var elemento = document.getElementById('lista');
//chiedo all'utente il cognome
var cognome = '';
while (cognome.length == 0) {
  cognome = prompt('Inserisci cognome:');
}
//inserisco il cognome in fondo
lista.push(cognome);
//ordino l'array anche se lettera minuscola
lista.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
//stampo
for (var i = 0; i < lista.length; i++) {
  var contenutoCorrente = elemento.innerHTML;
  elemento.innerHTML = contenutoCorrente + '<li>' + lista[i] + '</li>';
}
var posizione = lista.indexOf(cognome) + 1;
document.getElementById('risposta').innerHTML = cognome + ' in posizione ' + posizione;
