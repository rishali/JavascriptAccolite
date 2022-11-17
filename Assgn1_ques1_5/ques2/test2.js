// Create form fields firstName,lastName also create button.
// Add event listener to button and on clicking button values present in input field should be displayed as
// Name : FirstName LastName on the web page itself
// Add mouse hover event on the result , onmouse hover it should change the background color to yellow.

let btn = document.getElementById("submitButton");
let f_name =document.getElementById("fname");
let l_name=document.getElementById("lname");

btn.onclick = function () {
  document.getElementById("demo").innerHTML = "Name : "+f_name.value+" "+l_name.value;

  document.getElementById("demo").addEventListener("mouseover", mouseOver);
  document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.background= "yellow";
}

function mouseOut() {
  document.getElementById("demo").style.background= "white";
}
};