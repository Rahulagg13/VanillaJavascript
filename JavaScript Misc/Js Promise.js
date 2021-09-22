//******** Javascript Promises
/*
Promises in real-life express a trust between two or more persons and an assurance that a particular thing will surely happen. In javascript, a Promise is an object which ensures to produce a single value in the future (when required). Promise in javascript is used for managing and tackling asynchronous operations.


*/
var XMLHttpRequest = require("xhr2");

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "sample.html", true);
  xhttp.send();
}
