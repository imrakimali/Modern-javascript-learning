//create an emty object

const details = {};
details.fristName = "Rakim";
details.lastName = "Ali";
details.age = 21;
details.schoolName = "Uttara High School And College";

const connect = document.getElementById("test");
connect.innerHTML =
  details.fristName + " "+  details.lastName + " is " + details.age + " years old. ";
