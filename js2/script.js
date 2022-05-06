const firstCard = document.getElementById("first-card");
const firstBtn = document.getElementById("first-btn");


firstBtn.addEventListener("click", function(e){
    firstBtn.style.display = "none";
    firstBtn.nextElementSibling.firstElementChild.style.filter = "blur(0)";
    firstBtn.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.style.display = "block";

});

const secondCard = document.getElementById("second-card");
const secondBtn = document.getElementById("second-btn");


secondBtn.addEventListener("click", function(e){
    secondBtn.style.display = "none";
    secondBtn.nextElementSibling.firstElementChild.style.filter = "blur(0)";
    secondBtn.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.style.display = "block";

});

const thirdCard = document.getElementById("third-card");
const thirdBtn = document.getElementById("third-btn");


thirdBtn.addEventListener("click", function(e){
    thirdBtn.style.display = "none";
    thirdBtn.nextElementSibling.firstElementChild.style.filter = "blur(0)";
    thirdBtn.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.style.display = "block";

});

const fourthCard = document.getElementById("fourth-card");
const fourthBtn = document.getElementById("fourth-btn");


fourthBtn.addEventListener("click", function(e){
    fourthBtn.style.display = "none";
    fourthBtn.nextElementSibling.firstElementChild.style.filter = "blur(0)";
    fourthBtn.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.style.display = "block";

})