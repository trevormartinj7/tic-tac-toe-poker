console.log("connection complete")


let cardColor = document.getElementById("colorInput")
let cardId = document.getElementById("idInput")

console.log(cardColor);

function setCard(){
    let card = document.getElementById(idInput.value);
    console.log(card);
    card.style.color = colorInput.value;
}

function resetColor(){
    card = document.getElementById("diamonds");
    card.style.color = "grey";
    card = document.getElementById("hearts");
    card.style.color = "grey";
    card = document.getElementById("spades");
    card.style.color = "grey";
    card = document.getElementById("clubs");
    card.style.color = "grey";
}

