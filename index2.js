let uploadedImage = document.getElementById('uploaded-image');
let imageFile = document.getElementById('upload-file');
let priceForCard = document.getElementById('price-for-card');
let nameForCard = document.getElementById('name-for-card');
let installerButton = document.getElementById('installer-button');
let uf = document.getElementsByClassName('input-file span');

let imgInstalling = false;

imageFile.onchange = function(event) {
    let target = event.target;

    if (!FileReader) {
        alert('FileReader не поддерживается — облом');
        return;
    }

    if (!target.files.length) {
        alert('Ничего не загружено');
        return;
    }

    let fileReader = new FileReader();
    fileReader.onload = function() {
        uploadedImage.src = fileReader.result;
    }

    fileReader.readAsDataURL(target.files[0]);
    imgInstalling = true;

}

installerButton.onclick = function(){

    if(isNaN(priceForCard.value) || priceForCard.value === ""){
        priceForCard.value = "";
        priceForCard.style.boxShadow = "0 0 5px 4px rgb(255, 0, 0)";
    }
    else if(isNaN(priceForCard.value) === false && priceForCard.value !== ""){
        priceForCard.style.boxShadow = "0 0 15px 4px rgba(27, 246, 71, 0.82)";
    }

    if(nameForCard.value === ""){
        nameForCard.style.boxShadow = "0 0 5px 4px rgb(255, 0, 0)";
    }
    else if(nameForCard.value !== ""){
        nameForCard.style.boxShadow = "0 0 15px 4px rgba(27, 246, 71, 0.82)";
    }

    if(imgInstalling !== false && isNaN(priceForCard.value) === false && priceForCard.value !== "" && nameForCard.value !== ""){
        alert("Ваша карточка успешно добавлена!");
        window.location.href = 'index.html';
    }
}
