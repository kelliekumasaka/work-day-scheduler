var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// defined the global variables
var submitBtn = document.querySelector("#saveBtn")

// when save button is clicked, the form is saved