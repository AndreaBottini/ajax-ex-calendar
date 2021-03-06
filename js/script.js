// Creare un calendario dinamico con le festività. Partiamo dal gennaio 2018 dando la possibilità di cambiare mese, gestendo il caso in cui l’API non possa ritornare festività. Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).
//
// Ogni volta che cambio mese dovrò:
// 1. Controllare se il mese è valido (per ovviare al problema che l’API non carichi holiday non del 2018)
// 2. Controllare quanti giorni ha il mese scelto formando così una lista
// 3. Chiedere all’api quali sono le festività per il mese scelto
// 4. Evidenziare le festività nella lista
$(document).ready(function() {
  var mese = 0;
  console.log(mese);
  var anno = 2018;
  console.log(anno);

  $('.next').click(function() {
    console.log('qunado clicco funziona?');
  })
  $('.prev').click(function() {
    console.log('qunado clicco funziona all\'indietro?');
  })



  var dataDiPartenza = moment().year('2018').date('1').day('1')
  console.log(dataDiPartenza);
  // moment("2012-02", "YYYY-MM").daysInMonth()
  // dataDiPartenza.daysInMonth()
  console.log(dataDiPartenza.daysInMonth());

  for (var i = 1; i <= dataDiPartenza.daysInMonth(); i++) {
    // console.log(i);
    var month = dataDiPartenza.format('MM');
    var year = dataDiPartenza.format('YYYY');
    var thisWeekDay = moment(i + '-' + month + '-' + year, 'D-MM-YYYY');
    console.log(thisWeekDay);

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      day: i,
      weekday: thisWeekDay.format('ddd'),
      dataCompleta: thisWeekDay.format('YYYY-MM-DD'),
     };
      var html = template(context);
      $('.days').append(html)
  }
// FAcciamo la chiamata, ci restituisce un oggetto.
// Creo un ciclo e controllo l'oggetto
$.ajax( {
  url: 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
  method: 'GET',
  success: function (data, response) {
    console.log(data);
    for (var i = 0; i < data.response.length; i++) {
      var dataCorrente = data.response;
      console.log(dataCorrente);
      var element = dataCorrente[i];
      console.log(element);
      var dataSpecifica = element.date;
      var nomeSpecifico = element.name;
      console.log(dataSpecifica, nomeSpecifico);
      $('.days li').each(function() {
        var dataVacanza = $(this).children('.data-completa').text();
        if (dataVacanza == dataSpecifica) {
          $(this).addClass('red');
          $(this).find('.nome-festivita').append(element.name);
          }
      });
    }
  },
  error: function (data, response) {
    alert('Errore del server. Correggi!')
  }
});


});





// // var array = [
// //   {
// //     'name': 'gatto'
// //   },
//
//   {
//     'name': 'cane'
//   }
// ]
//   console.log(array[1]);
