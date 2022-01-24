// JavaScript source code
var out = false;
var age;
var render = document.getElementById("render");
do {
     age = prompt("Before continue I just want to know how old are you ?")
    try {
        age = parseInt(age)
    } catch (Error) {
        console.error(Error);
    }
    if (age > 0 && age <= 6) {
        render.innerHTML = "you are a young child of "+age+" years old";
        out = true;
    } else if (age > 6 && age <= 11) {
        render.innerHTML = "you are a child of "+age+" years old and who reached the step to think yourself ";
        out = true
    } else if (age > 11 && age <= 17) {
        render.innerHTML = "you are a teenage who are "+age+" years old";
        out = true
    } else if (age > 17 && age <= 120) {
        render.innerHTML = "you are a man of "+age+" years old";
        out =true
    } else {
        alert("Error try again")
        out = false
    }
}while(out == false)
