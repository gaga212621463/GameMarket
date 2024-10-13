let name = document.getElementById('name');
let cardnumber = document.getElementById('cardnumber');
let mmyy = document.getElementById('expirationdate');
let cvv = document.getElementById('securitycode');

let valid1 = false;
let valid2 = false;
let valid3 = false;
let valid4 = false;


function mask1() {
    let val = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '');
    val = val !== '' ? val.match(/.{1,4}/g).join` ` : ``;
    this.value = val;
}
cardnumber.addEventListener('input', mask1);


function mask2() {
    let val = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '');
    val = val !== '' ? val.match(/.{1,2}/g).join`/` : ``;
    this.value = val;
}
mmyy.addEventListener('input', mask2);



document.getElementById('form-button').onclick = function(){
    if(isNaN(cardnumber.value.slice(0, 5)) == true || isNaN(cardnumber.value.slice(6, 10)) == true || isNaN(cardnumber.value.slice(11, 15)) == true || isNaN(cardnumber.value.slice(16, 20)) == true || cardnumber.value === "" || cardnumber.value.length < 19){
        cardnumber.value = "";
        cardnumber.style.boxShadow = "0 0 5px 4px rgb(255, 0, 0)";
    }
    else{
        cardnumber.style.boxShadow = "0 0 15px 4px rgba(27, 246, 71, 0.82)";
        valid1 = true;
    }

    if(isNaN(mmyy.value.slice(0, 2)) == true || isNaN(mmyy.value.slice(4, 6)) || mmyy.value === "" || mmyy.value.length != 5){

        mmyy.value = "";
        mmyy.style.boxShadow = "0 0 5px 4px rgb(255, 0, 0)";
    }
    else{
        mmyy.style.boxShadow = "0 0 15px 4px rgba(27, 246, 71, 0.82)";
        valid2 = true;
    }

    if(isNaN(cvv.value) || cvv.value === "" || cvv.value.length != 3){
        cvv.value = "";
        cvv.style.boxShadow = "0 0 5px 4px rgb(255, 0, 0)";
    }
    else{
        cvv.style.boxShadow = "0 0 15px 4px rgba(27, 246, 71, 0.82)";
        valid3 = true;
    }
    
    if(name.value === ""){
        name.style.boxShadow = "0 0 5px 4px rgb(255, 0, 0)";
    }
    else if(name.value !== ""){
        name.style.boxShadow = "0 0 15px 4px rgba(27, 246, 71, 0.82)";
        valid4 = true;
    }

    if(valid1 && valid2 && valid3 && valid4){
        alert("Оплата прошла успешно!");
        window.location.href = 'index.html';
    }
    
}




