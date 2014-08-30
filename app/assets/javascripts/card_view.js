function CardView(model){
  this.model = model;
  this.$el = $("<div></div>");
  this.$el.on("click", ".button", this.deleteCard);
}
CardView.prototype.render = function(){
  this.$el.html('<div class="large-3 columns draggable"><ul class="pricing-table"><li class="title">'+this.model.name+'</li><li><img  src="http://media.caranddriver.com/images/media/51/dissected-lotus-based-infiniti-emerg-e-sports-car-concept-top-image-photo-451994-s-original.jpg" height="65" width="136" /></li><li class="description">'+this.model.city_mpg +'MPG City /'+this.model.hwy_mpg+'MPG Hwy</li><li class="bullet-item">$'+this.model.monthly_cost+'mo</li><li class="bullet-item">$'+this.model.yearly_cost+'yr</li><li class="cta-button"><a href="#" class="button round tiny">X</a></li></ul></div>');
  return this.$el;
}

CardView.prototype.displayCard = function(){
  $('.cards').prepend(this.render());
}

CardView.prototype.deleteCard = function(event){
  event.preventDefault();
  $(this).parent().parent().parent().empty();
}
