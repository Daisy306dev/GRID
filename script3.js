const objectDog = { name: "dog", breed: "shibainu", nature: "confident" };

function nnnnN(el) {
    document.querySelector("p").innerHTML = `this is a ${el.name}`;
}
document.getElementById("name").onclick = function () {nnnnN(objectDog)};

function nnnnN2(el) {
    document.querySelector("p").innerHTML = `this is ${el.breed}`;
}
document.getElementById("breed").onclick = function () {nnnnN2(objectDog)};

function nnnnN3(el) {
    document.querySelector("p").innerHTML = `this is ${el.nature}`;
}
document.getElementById("nature").onclick = function () {nnnnN3(objectDog)};


function imgUpdate() {
    document.getElementById("D1").src ="https://i.pinimg.com/236x/0a/48/f6/0a48f6e8afb1ec144d1fddba84287595.jpg";
    objectDog.name = "puppy";
    objectDog.breed = "malamute";
    objectDog.nature = "optimistic";
    
    document.getElementById("Dp").onclick = imgUpdate2;
};

document.getElementById("Dp").onclick = imgUpdate;

function imgUpdate2() {
    document.getElementById("D1").src ="https://i.namu.wiki/i/u6RY6Cwfgl5LU3zbiqxbOzmRfe2IEeICXexXNykfzxwnhMwIvV8KddLNkUxyNyDQzBwtvD9swGszVOXM_A0UFw.webp";
    objectDog.name = "puppy2";
    objectDog.breed = "Pomeranian";
    objectDog.nature = "fun";
};














function nnnnN4() {
    document.getElementById("par2").innerHTML = `this is a cat`;
}
document.getElementById("name2").onclick = nnnnN4;

function nnnnN5() {
    document.getElementById("par2").innerHTML = `this is Mackerel tabby`;
}
document.getElementById("breed2").onclick = nnnnN5;

function nnnnN6() {
    document.getElementById("par2").innerHTML = `this is moody`;
}
document.getElementById("nature2").onclick = nnnnN6;