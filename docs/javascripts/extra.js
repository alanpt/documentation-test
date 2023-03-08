// Get references to the form fields
var input1 = document.getElementById("input1");
//var input2 = document.getElementById("input2");
const input2 = document.querySelector('input[name="query"].md-search__input[data-md-component="search-query"]');
// Add an event listener to field1 that listens for "input" events

input1.addEventListener("input", function() {
  // When the user types something in field1, move the input to field2
  input2.value = input1.value;
	input2.focus();
  // Clear the input in field1
  input1.value = "";
});
