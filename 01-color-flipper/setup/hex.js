const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = "#" + colorsNumber(); 
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function colorsNumber(){
    var S = '';
    for (let i = 0; i < 6; i++){
        S += hex[randomNumber()];
    }
    return S;
}

function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}