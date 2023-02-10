const btnAdd = document.getElementById('addMusic');
var lista = document.getElementById('listaMusicas');
var nomeMusica = document.getElementById('question7-1');

/*const inputFile = document.querySelector("#pictureInput");
const pictureImage = document.querySelector(".pictureImage");
const pictureImageTxt = "Clique para selecionar a imagem";
pictureImage.innerHTML = pictureImageTxt;
const urlImage = document.getElementById('urlImage');*/

const boxQ1 = document.getElementById('boxQ1');
const boxQ7 = document.getElementById('boxQ7');
const btnYQ1 = document.getElementById('question1Yes');
const btnNQ1 = document.getElementById('question1No');
const btnYQ7 = document.getElementById('question7Yes');
const btnNQ7 = document.getElementById('question7No');

btnYQ1.addEventListener('click', function() {
    boxQ1.style.display = 'flex';
    boxQ1.style.flexDirection = 'column';
    boxQ1.style.alignItems = 'center';
    boxQ1.style.width = '100%';
})

btnNQ1.addEventListener('click', function() {
    boxQ1.style.display = 'none';
})

btnYQ7.addEventListener('click', function() {
    boxQ7.style.display = 'flex';
    boxQ7.style.width = '100%';
    boxQ7.style.alignItems = 'center';
    boxQ7.style.flexDirection = 'column';
})

btnNQ7.addEventListener('click', function() {
    boxQ7.style.display = 'none';
})

btnAdd.addEventListener('click', addMusic);

nomeMusica.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        e.preventDefault();
        btnAdd.click();
        nomeMusica.value = '';
    }
})

function addMusic() {
    lista.innerHTML += '<li id="music'+lista.childElementCount+'"><input type="text" name="musica'+(lista.childElementCount + 1)+'" readonly value="'+nomeMusica.value+'">';
    nomeMusica.value = '';
    nomeMusica.focus();
}

function deleteMusic() {
    if (confirm('Deseja remover a última música?')) {
        document.getElementById('music'+(lista.childElementCount-1)).outerHTML = "";
    }
}

/*inputFile.addEventListener("change", addImage);

function addImage(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    const file2 = inputTarget.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
  
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("pictureImg");
  
        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);

        urlImage.innerHTML = '<span id="urlImage" style="display: none;"><input type="text" name="urlImage" value="'+ img.src +'"></span>';
      });
  
      reader.readAsDataURL(file);
    }
    
    else {
      pictureImage.innerHTML = pictureImageTxt;
      urlImage.innerHTML = '';
    }
  };
*/