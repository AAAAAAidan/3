/** Get the current subscriber count and add it to the page. */
window.onload = function() {
  var url = "https://script.google.com/macros/s/AKfycbwfnrR8CWZzAzZr4l4LOmNxdsu3hwut-9N5ZIqY4Zcrl8swWXw/exec";
  var xhttp;

  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest(); // For modern browsers
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP"); // For IE5 and IE6
  }

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("subCount").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", url, false);
  xhttp.send();
}
