function introduceName() {
    return document.querySelector("p").innerHTML = `this is a dog`;
}
document.getElementById("name").onclick = introduceName;

function introduceBreed() {
    return  document.querySelector("p").innerHTML = `this is shibainu`;
}
document.getElementById("breed").onclick = introduceBreed;

function introduceNature() {
    return document.querySelector("p").innerHTML = `this is confident`;
}
document.getElementById("nature").onclick = introduceNature;




function introduceName2() {
    return document.getElementById("par2").innerHTML = `this is a cat`;
}
document.getElementById("name2").onclick = introduceName2;

function introduceBreed2() {
    return document.getElementById("par2").innerHTML = `this is Mackerel tabby`;
}
document.getElementById("breed2").onclick = introduceBreed2;

function introduceNature2() {
    return document.getElementById("par2").innerHTML = `this is moody`;
}
document.getElementById("nature2").onclick = introduceNature2;
