/**************JAVASCRIPT COOKIES***************/
// A cookie is an amount of information that persists between a server-side and a client-side.
// A web browser stores this information at the time of browsing.
// A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons.
// It maintains the state of a user and remembers the user's information among all the web pages.
// In JavaScript, we can create, read, update and delete a cookie by using document.cookie property.
//cookies attributes

//1. expires-->It maintains the state of a cookie up to the specified date and time.

//2. max-age-->It maintains the state of a cookie up to the specified time. Here, time is given in seconds.

//3. path-->It expands the scope of the cookie to all the pages of a website.

//4. domain-->It is used to specify the domain for which the cookie is valid.
function setCookie() {
  document.cookie = "username=Duke Martin";
}
function getCookie() {
  if (document.cookie.length != 0) {
    var array = document.cookie.split("=");
    alert("Name=" + array[0] + " " + "Value=" + array[1]);
  } else {
    alert("Cookie not available");
  }
}
