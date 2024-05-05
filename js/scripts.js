// Carrossel
const imgs = document.querySelectorAll(".programa");
const caixaTexto = document.getElementsByClassName("textoPrograma");
var index = 0; //Valor das classes imgs
var posX = 0; //Valor que será usado para mover as divs
var verificacao = 0; //Valor que verificará quantas vezes cliquei o botão das setas


function carrosselEsquerdo(){
    if (verificacao < 4) {
        verificacao += 1;
        posX -= 410;
        index = 0;
        for (; index < 6; index++) {
            imgs[index].style.transition = "transform 500ms"
            imgs[index].style.transform = `translateX(${posX}px)`;
        }
        if (verificacao == 1){
            index = 3;
        }else if(verificacao == 2){
            index = 4;
        }else if(verificacao == 3){
            index = 5;
        }else if(verificacao == 4){
            if (index == 6) {
                index = 0;
                posX = 0;
                for (; index < 6; index++) {
                    imgs[index].style.transition = "transform 500ms"
                    imgs[index].style.transform = `translateX(${posX}px)`;
                }
                index = 0;
                verificacao = 0;
            }
        }else{
            index = 0;
        }
    }
}

function carrosselDireito() {
    if (index == 6) {
        index = 5;
        console.log("teste")
    }
    if (verificacao > 0) {
        verificacao -= 1;
        posX += 410;
        for (; index > -1; index--) {
            imgs[index].style.transition = "transform 500ms"
            imgs[index].style.transform = `translateX(${posX}px)`
        }
        if (verificacao == 0){index = 0;}else{index = 5};
    }
}



function passarImagens(direcao) {

    if (direcao == 0) {

        carrosselEsquerdo();
        
    }else if(direcao == 1){

        carrosselDireito();
        
    }
}

caixaTexto[0].style.backgroundColor = "black";
caixaTexto[0].style.color = "purple";

imgs[0].style.backgroundImage = "url('./img/mvp-min.jpg')";
imgs[0].style.backgroundPosition = "top";
imgs[0].style.backgroundSize = "cover";


caixaTexto[1].style.backgroundColor = "purple";
caixaTexto[1].style.color = "yellow";

imgs[1].style.backgroundImage = "url('../img/multiverso-loading-min.jpg')"
imgs[1].style.backgroundPosition = "top";
imgs[1].style.backgroundSize = "cover";


caixaTexto[2].style.backgroundColor = "yellow";
caixaTexto[2].style.color = "black";

imgs[2].style.backgroundImage = "url('../img/mais-geek-min.jpg')"
imgs[2].style.backgroundPosition = "top";
imgs[2].style.backgroundSize = "cover";

caixaTexto[3].style.backgroundColor = "#0dabfd";
caixaTexto[3].style.color = "yellow";

imgs[3].style.backgroundImage = "url('../img/gameshark-min.jpg')"
imgs[3].style.backgroundPosition = "top";
imgs[3].style.backgroundSize = "cover";

caixaTexto[4].style.backgroundColor = "#732ed8";
caixaTexto[4].style.color = "yellow";

imgs[4].style.backgroundImage = "url('../img/megacrush-min.jpg')"
imgs[4].style.backgroundPosition = "top";
imgs[4].style.backgroundSize = "cover";

caixaTexto[5].style.backgroundColor = "#fe4715";
caixaTexto[5].style.color = "yellow";

imgs[5].style.backgroundImage = "url('../img/tv-club-coreia-min.jpg')"
imgs[5].style.backgroundPosition = "top";
imgs[5].style.backgroundSize = "cover";

setInterval(carrosselEsquerdo, 4000);

// A cada e sec, as divs se movem. Os valores posX serão definidos por váriaveis como já está.
// Ao clicar nas setas, elas ganham ou perdem um valor numerico para se moverem e será armazenado um valor para 
//quando chegar no final da div, caso o valor seja o maximo, as divs voltam para o inicio.

//Fim do Carrossel










//Outro carrossel :v
const imgs0 = document.querySelectorAll(".programa0");
const caixaTexto0 = document.getElementsByClassName("textoPrograma0");
var index0 = 0; //Valor das classes imgs
var posX0 = 0; //Valor que será usado para mover as divs
var verificacao0 = 0; //Valor que verificará quantas vezes cliquei o botão das setas


function carrosselEsquerdo0(){
    if (verificacao0 < 4) {
        verificacao0 += 1;
        posX0 -= 410;
        index0 = 0;
        for (; index0 < 6; index0++) {
            imgs0[index0].style.transition = "transform 500ms"
            imgs0[index0].style.transform = `translateX(${posX0}px)`;
        }
        if (verificacao0 == 1){
            index0 = 3;
        }else if(verificacao0 == 2){
            index0 = 4;
        }else if(verificacao0 == 3){
            index0 = 5;
        }else if(verificacao0 == 4){
            if (index0 == 6) {
                index0 = 0;
                posX0 = 0;
                for (; index0 < 6; index0++) {
                    imgs0[index0].style.transition = "transform 500ms"
                    imgs0[index0].style.transform = `translateX(${posX}px)`;
                }
                index0 = 0;
                verificacao0 = 0;
            }
        }else{
            index0 = 0;
        }
    }
}

function carrosselDireito0() {
    if (index0 == 6) {
        index0 = 5;
    }
    if (verificacao0 > 0) {
        verificacao0 -= 1;
        posX0+= 410;
        for (; index0 > -1; index0--) {
            imgs0[index0].style.transition = "transform 500ms"
            imgs0[index0].style.transform = `translateX(${posX0}px)`
        }
        if (verificacao0 == 0){index0 = 0;}else{index0 = 5};
    }
}



function passarImagens0(direcao0) {

    if (direcao0 == 0) {

        carrosselEsquerdo0();
        
    }else if(direcao0 == 1){

        carrosselDireito0();
        
    }
}

caixaTexto0[0].style.backgroundColor = "black";
caixaTexto0[0].style.color = "purple";

imgs0[0].style.backgroundImage = "url('../img/mvp-min.jpg')";
imgs0[0].style.backgroundPosition = "top";
imgs0[0].style.backgroundSize = "cover";


caixaTexto0[1].style.backgroundColor = "purple";
caixaTexto0[1].style.color = "yellow";

imgs0[1].style.backgroundImage = "url('../img/multiverso-loading-min.jpg')"
imgs0[1].style.backgroundPosition = "top";
imgs0[1].style.backgroundSize = "cover";


caixaTexto0[2].style.backgroundColor = "yellow";
caixaTexto0[2].style.color = "black";

imgs0[2].style.backgroundImage = "url('../img/mais-geek-min.jpg')"
imgs0[2].style.backgroundPosition = "top";
imgs0[2].style.backgroundSize = "cover";

caixaTexto0[3].style.backgroundColor = "#0dabfd";
caixaTexto0[3].style.color = "yellow";

imgs0[3].style.backgroundImage = "url('../img/gameshark-min.jpg')"
imgs0[3].style.backgroundPosition = "top";
imgs0[3].style.backgroundSize = "cover";

caixaTexto0[4].style.backgroundColor = "#732ed8";
caixaTexto0[4].style.color = "yellow";

imgs0[4].style.backgroundImage = "url('../img/megacrush-min.jpg')"
imgs0[4].style.backgroundPosition = "top";
imgs0[4].style.backgroundSize = "cover";

caixaTexto0[5].style.backgroundColor = "#fe4715";
caixaTexto0[5].style.color = "yellow";

imgs0[5].style.backgroundImage = "url('../img/tv-club-coreia-min.jpg')"
imgs0[5].style.backgroundPosition = "top";
imgs0[5].style.backgroundSize = "cover";

setInterval(carrosselEsquerdo0, 4000);