let openingButton = document.getElementById("new-games-section");
let gamesPartTwo = document.getElementById("games-part-two");
let createCardButton = document.getElementById("create-card-button");


document.getElementById("go-k-igram").onclick = function (){
    document.getElementById("games").scrollIntoView({behavior: "smooth"});
}

const prices = document.getElementsByClassName("games-item-price");

document.getElementById("change-vallet").onclick = function(e){
    const currentCurrency = e.target.innerText;
    let newCurrency = "₽"
    let coefficient = 1;

    if(currentCurrency === "₽"){
        newCurrency = "$";
        coefficient = 95;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") / coefficient).toFixed(1) + " " + newCurrency;
    }
}



openingButton.onclick = function (){
    gamesPartTwo.style.display = "flex";
    openingButton.style.display = "none"; 
};

createCardButton.onclick = function (){
    window.location.href = 'Create-card-page.html';
};

const buttons = document.querySelectorAll(".buy-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (){
        window.location.href = 'forma-zakaza.html';
    }
}
