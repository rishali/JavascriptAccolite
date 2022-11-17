// Create form fields firstName,lastName,email,dob,age,designation,address also create button.
// Add event listener to button and on clicking button page should be redirected to new page and
// values should be displayed in JSON format in the console
// e.g : 
//     result = {
//     firstName:'test',
//     lastName:'test',
//     email:'test',
//     dob:'1/1/1',
//     age:'321',
//     designation:'test',
//     address:'test',
// }

let btn = document.getElementById("submitButton");
let f_name =document.getElementById("fname");
let l_name=document.getElementById("lname");
let email =document.getElementById("email");
let dob=document.getElementById("DOB");
let age =document.getElementById("age");
let designation=document.getElementById("designation");
let address =document.getElementById("address");


btn.onclick = function () {
  window.open("https://www.google.com/");

  console.log("result = { \n firstName: '"+f_name.value+"', \n lastName: '"+l_name.value+"', \n email: '"+email.value+"', \n dob: '"+dob.value+"', \n age: '"+age.value+"', \n designation: '"+designation.value+"',\n address: '"+address.value+"',\n }");
};