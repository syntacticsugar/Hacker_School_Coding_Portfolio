var results = $("#results");

$(".integer, .operation").click( function(event) {
  /*.innerText */
  var token = this.innerText
  if (results.text().length < 15) {
    results.append( token )
  }

});

/* create 'eval' or 'calculate' function */

function calculate( expression ) {
  return eval(expression);
}

/* RESET/CLEAR BUTTON */
$("#reset").click ( function() {
  results.text("");
});

$("#equals").click( function() {
  results.text( calculate(results.text()) );
});
