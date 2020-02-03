// Creare un calendario dinamico con le festività. Partiamo dal gennaio 2018 dando la possibilità di cambiare mese, gestendo il caso in cui l’API non possa ritornare festività. Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).
//
// Ogni volta che cambio mese dovrò:
// 1. Controllare se il mese è valido (per ovviare al problema che l’API non carichi holiday non del 2018)
// 2. Controllare quanti giorni ha il mese scelto formando così una lista
// 3. Chiedere all’api quali sono le festività per il mese scelto
// 4. Evidenziare le festività nella lista
$(document).ready(function() {
  var mese = moment().month()
  console.log(mese);
});
