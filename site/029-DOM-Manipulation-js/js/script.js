//Arrays
var array = new Array();
  array[0] = "Valentin";
  array[1] = 2;
  array[2] = function(name){
    console.log("Hello " + name);
  };
  array[3] = {course: " HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);

// Short hand array creation
var names = ["Valentin", "Agustin", "Joe"];
console.log(names);

var namess = [
{ name: "Valentin"},
{ name: "Agustin"},
Joe
]
console.log(namess);


for (var i=0; i < names.length; i++){
  console.log("Hello " names[i]);
}

// Another form

var names2 = {"Valentin", "Agustin", "Juan"};
for(var name in names2){
  console.log("Hello " + names2[name]);
}

var myObj = {
  name: "Valentin"
  course: "HTML/CSS/JS",
  plataform: "Coursera"
};
for(var prop in myObj){
  console.log(prop + ": " + myObj[prop]);
}