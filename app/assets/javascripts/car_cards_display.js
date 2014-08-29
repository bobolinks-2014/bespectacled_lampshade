// Allows car info cards to be removed from DOM
$(".cards").on("click", ".button", function(event) {
  event.preventDefault();
  $(this).parent().parent().parent().empty();
});
