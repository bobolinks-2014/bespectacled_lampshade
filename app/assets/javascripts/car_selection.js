// make onchange
// grab newly selected make
// we want model to  be populated with the models associated with that newly selected make
// this is an ajax call
//then we render!
function Input(){
  this.destination;
  this.starting_point;
  this.make;
  this.model;
  this.year;
}





$('#make').change(function(e) {

  var selected = $(this).find(":selected").text();
  var request = $.get('/get_model', {chosen_make: selected});
  request.done(function(data){
    $('#model').empty();
    $('#year').empty();
    $.each(data, function(item){
      $('#model').append('<option value>'+data[item]+'</option>');
    });
  });
});

$('#model').change(function(e) {
  var selected = $(this).find(":selected").text();
  var request = $.get('/get_model_year', {chosen_model: selected});
  request.done(function(data){
    $('#year').empty();
    $.each(data, function(item){
      $('#year').append('<option value>'+data[item]+'</option>');
    });
  });
});


// when the user submits the form, make a post request.

$('#user').submit(function(e){
  e.preventDefault();

  var input = {
    starting_point: $('#starting_point').val(),
    destination: $('#destination').val(),
    make: $('#make').find(":selected").text(),
    model: $('#model').find(":selected").text(),
    year: $('#year').find(":selected").text()
  };
  var request = $.get('/submit', input);
  request.done(function(data){
    console.log(data);
    card = new Card(data);
    cardView = new CardView(card)
    cardView.displayCard();
    // $('.cards').append('<div class="large-3 columns "><ul class="pricing-table"><li class="title">'+data.name+'</li><li><img  src="http://media.caranddriver.com/images/media/51/dissected-lotus-based-infiniti-emerg-e-sports-car-concept-top-image-photo-451994-s-original.jpg" height="65" width="136" /></li><li class="description">'+data.city_mpg +'MPG City /'+data.hwy_mpg+'MPG Hwy</li><li class="bullet-item">$'+data.monthly_cost+'mo</li><li class="bullet-item">$'+data.yearly_cost+'yr</li><li class="cta-button"><a href="#" class="button round tiny">X</a></li></ul></div>');
  });
});
