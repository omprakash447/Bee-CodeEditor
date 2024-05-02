document.querySelector('.form-container').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

let btn1 = document.getElementById("btn1");
let form = document.getElementById("form");
let container = document.getElementById("container");
let body = document.querySelector("body");
let btn2 = document.getElementById("btn2");


btn1.addEventListener("click", function() {
    form.style.display = "block";
    body.style.backgroundColor = "black";
})