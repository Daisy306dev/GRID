https://daisy306dev.github.io/GRID/

<JavaScript>
const objectDog = { name: "dog", breed: "shibainu", nature: "confident" };  //object 사용함.  ==>objext 값을 업데이트가능!

function nnnnN(el) {
    document.querySelector("p").innerHTML = `this is a ${el.name}`;               //`${}` 사용함     --> object 값에서 속성값찾기 가능!
}
document.getElementById("name").onclick = function () {nnnnN(objectDog)};        //eventhandler 사용할때는 *함수의 결과값을 넣지말고
                                                                                //함수 그자체를 넣어야한다. function () {funcName(para)}
                                                                                // -->클릭시 이벤트 발동!

function nnnnN2(el) {
    document.querySelector("p").innerHTML = `this is ${el.breed}`;
}
document.getElementById("breed").onclick = function () {nnnnN2(objectDog)};

function nnnnN3(el) {
    document.querySelector("p").innerHTML = `this is ${el.nature}`;
}
document.getElementById("nature").onclick = function () {nnnnN3(objectDog)};


function imgUpdate() {
    document.getElementById("D1").src ="https://i.pinimg.com/236x/0a/48/f6/0a48f6e8afb1ec144d1fddba84287595.jpg"; //사진소스업데이트.
    objectDog.name = "puppy";
    objectDog.breed = "malamute";
    objectDog.nature = "optimistic";              //object 각 속성값을 업데이트!
    
    document.getElementById("Dp").onclick = imgUpdate2;       //함수 안에서 함수를 호출! event와 eventHandler 활용!
};

document.getElementById("Dp").onclick = imgUpdate;           //함수를 호출.

function imgUpdate2() {
    document.getElementById("D1").src ="https://i.namu.wiki/i/u6RY6Cwfgl5LU3zbiqxbOzmRfe2IEeICXexXNykfzxwnhMwIvV8KddLNkUxyNyDQzBwtvD9swGszVOXM_A0UFw.webp";
    objectDog.name = "puppy2";
    objectDog.breed = "Pomeranian";
    objectDog.nature = "fun";            
}; 



//아래는 미완성 작업..
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
