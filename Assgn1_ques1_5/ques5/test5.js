// Continuing with exercise 4 , further use below object and merge it with object received in exercise 4 and display it 
// on new page 
// obj2 = {
// 	state:'test'
// 	country:'test',
// 	pincode:'12312',
// }

let btn = document.getElementById("submitButton");
let f_name =document.getElementById("fname");
let l_name=document.getElementById("lname");
let email =document.getElementById("email");
let dob=document.getElementById("DOB");
let age =document.getElementById("age");
let designation=document.getElementById("designation");
let address =document.getElementById("address");

var result = "{ \n firstName:'"+f_name.value+"', \n lastName:'"+l_name.value+"', \n email:'"+email.value+"', \n dob:'"+dob.value+"', \n age:'"+age.value+"', \n designation:'"+designation.value+"',\n address:'"+address.value+"',\n }";


var obj2 = {
  state:'test',
  country:'test',
  pincode:'12312',
  }

btn.onclick = function () {

  window.open("http://127.0.0.1:5500/question4/index4.html");
  console.log("result = { \n firstName:'"+f_name.value+"', \n lastName:'"+l_name.value+"', \n email:'"+email.value+"', \n dob:'"+dob.value+"', \n age:'"+age.value+"', \n designation:'"+designation.value+"',\n address:'"+address.value+"',\n }");
  document.getElementById("formm").innerHTML = "Name : "+f_name.value+" "+l_name.value +"\n Email :"+email.value;
  console.log(result);
  let merged = {...result, ...obj2};

 console.log( merged );
};