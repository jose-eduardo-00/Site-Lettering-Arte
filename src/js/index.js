const slide = document.querySelectorAll('.slide')
const botao = document.querySelectorAll('.radio')
const imagesList = document.querySelectorAll('.imgs')

botao.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoselecionado()
        selecionarBotaoCarrossel(indice)
        esconderImagemAtiva()
        mostraImagemDeFundo(indice)
    })
});

function desativarBotaoselecionado(){
    const botaoSelecionado = document.querySelector('.btn-active')
    botaoSelecionado.classList.remove('btn-active')
}

function selecionarBotaoCarrossel(indice){
    const botaoParaAtivar = document.querySelectorAll('.manual-btn')
    botaoParaAtivar[indice].classList.add('btn-active')
}

function mostraImagemDeFundo(indice) {
    slide[indice].classList.add('active');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.active');
    imagemAtiva.classList.remove('active');
}

setInterval(() => {
    if(slide[0].classList.contains('active')){
        slide[0].classList.remove('active')
        slide[1].classList.add('active')
        document.querySelector('.btn-active').classList.remove('btn-active')
        document.querySelectorAll('.manual-btn')[1].classList.add('btn-active')

    }else if(slide[1].classList.contains('active')){
        slide[1].classList.remove('active')
        slide[2].classList.add('active')
        document.querySelector('.btn-active').classList.remove('btn-active')
        document.querySelectorAll('.manual-btn')[2].classList.add('btn-active')

    }else if(slide[2].classList.contains('active')){
        slide[2].classList.remove('active')
        slide[0].classList.add('active')
        document.querySelector('.btn-active').classList.remove('btn-active')
        document.querySelectorAll('.manual-btn')[0].classList.add('btn-active')
    }
}, 5000)

imagesList.forEach((img, indice) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'translateY(-20px)'
        document.querySelectorAll('.img')[indice].style.filter = 'brightness(50%)'
        document.querySelectorAll('.btn-comprar')[indice].classList.add('show-btn')

    })
    img.addEventListener('mouseout', () =>{
        img.style.transform = ''
        document.querySelectorAll('.img')[indice].style.filter = ''
        document.querySelectorAll('.btn-comprar')[indice].classList.remove('show-btn')
    })
});


const btnEmail = document.querySelectorAll('#btn-copy')

btnEmail.forEach((element, indice) => {
    element.addEventListener('click', () => {
            const texto = "contato.adamn@gmail.com";
            let inputTest = document.createElement("input");
            inputTest.value = texto;
            document.body.appendChild(inputTest);
            inputTest.select();
            document.execCommand('copy');
            document.body.removeChild(inputTest);

            const spanEvent = document.querySelectorAll('.span')
            spanEvent[indice].classList.add('span-active')
            setInterval(() => {
                spanEvent[indice].classList.remove('span-active')
            }, 1000);

    })
})

const controlsQuadros = document.querySelectorAll('.control')
let currentItemQuadros = 0
let currentItemCanecas = 0
const itemsQuadros = document.querySelectorAll('.img-quadros')
const itemsCanecas = document.querySelectorAll('.img-canecas')
const maxItemsQuadros = itemsQuadros.length
const maxItemsCanecas = itemsCanecas.length

controlsQuadros.forEach(control => {
    control.addEventListener('click', () => {
        if(control.classList.contains('quadros')){
            const isLeft = control.classList.contains('left')
            if(isLeft){
                currentItemQuadros -= 4
                if(currentItemQuadros >= maxItemsQuadros || currentItemQuadros == 1){
                    currentItemQuadros = 0
                }else if(currentItemQuadros == maxItemsQuadros - 5 && currentItemQuadros > 4){
                    currentItemQuadros -= 5 
                }else if(currentItemQuadros < 0 && currentItemQuadros > 5){
                    currentItemQuadros = maxItemsQuadros - 3
                }else if(currentItemQuadros > 0 && currentItemQuadros < 5){
                    currentItemQuadros = 0
                }else if(currentItemQuadros <= maxItemsQuadros && currentItemQuadros > 1 && currentItemQuadros < 5){
                    currentItemQuadros -= 1
                }else if(currentItemQuadros <= 0){
                    currentItemQuadros = maxItemsQuadros - 1
                }else{
                    currentItemQuadros -= 1
                }
            }else{
                currentItemQuadros += 4
                if(currentItemQuadros >= maxItemsQuadros || currentItemQuadros == 1){
                    currentItemQuadros = 0
                }else if(currentItemQuadros == maxItemsQuadros - 1){
                    currentItemQuadros = 0
                }else if(currentItemQuadros < 0 && currentItemQuadros > 5){
                    currentItemQuadros = maxItemsQuadros + 3
                }else if(currentItemQuadros <= maxItemsQuadros && currentItemQuadros > 1 && currentItemQuadros < 5){
                    currentItemQuadros += 1
                }else if(currentItemQuadros > 0 && currentItemQuadros < 5){
                    currentItemQuadros = 0
                }else if(currentItemQuadros <= 0){
                    currentItemQuadros = maxItemsQuadros + 1
                }else{
                    currentItemQuadros += 1
                }
            }
            console.log(currentItemQuadros)
            itemsQuadros[currentItemQuadros].scrollIntoView({
                block: 'nearest',
                inline: 'start',
            })
        }else if(control.classList.contains('canecas')){
            const isLeft = control.classList.contains('left')
            if(isLeft){
                currentItemCanecas -= 4
                if(currentItemCanecas >= maxItemsCanecas || currentItemCanecas == 1){
                    currentItemCanecas = 0
                }else if(currentItemCanecas == maxItemsCanecas - 5  && currentItemQuadros > 4){
                    currentItemCanecas -= 5 
                }else if(currentItemCanecas < 0 && currentItemCanecas > 5){
                    currentItemCanecas = maxItemsCanecas - 3
                }else if(currentItemCanecas > 0 && currentItemCanecas < 5){
                    currentItemCanecas = 0
                }else if(currentItemCanecas <= maxItemsCanecas && currentItemCanecas > 1 && currentItemCanecas < 5){
                    currentItemQuadros -= 1
                }else if(currentItemCanecas <= 0){
                    currentItemCanecas = maxItemsCanecas - 1
                }else{
                    currentItemCanecas -= 1
                }
            }else{
                currentItemCanecas += 4
                if(currentItemCanecas >= maxItemsCanecas || currentItemCanecas == 1){
                    currentItemCanecas = 0
                }else if(currentItemCanecas == maxItemsCanecas - 1){
                    currentItemCanecas = 0
                }else if(currentItemCanecas < 0 && currentItemCanecas > 5){
                    currentItemCanecas = maxItemsCanecas + 3
                }else if(currentItemCanecas <= maxItemsCanecas && currentItemCanecas > 1 && currentItemCanecas < 5){
                    currentItemCanecas += 1
                }else if(currentItemCanecas > 0 && currentItemCanecas < 5){
                    currentItemCanecas = 0
                }else if(currentItemCanecas <= 0){
                    currentItemCanecas = maxItemsCanecas + 1
                }else{
                    currentItemCanecas += 1
                }
            }
            console.log(currentItemCanecas)
            itemsCanecas[currentItemCanecas].scrollIntoView({
                block: 'nearest',
                inline: 'start',
            })
        }
    })
})

const hamburguer = document.querySelector('#menu-bar')
const menu = document.querySelector('.menu')
const body = document.querySelector('#body')

body.addEventListener('click', () => {
    if(hamburguer.contains(event.target)){
        menu.classList.toggle('change-btn')
        document.querySelector('#bar1').classList.toggle('bar1-x')
        document.querySelector('#bar2').classList.toggle('bar2-x')
        document.querySelector('#bar3').classList.toggle('bar3-x')
        
    }else{
        menu.classList.remove('change-btn')
        document.querySelector('#bar1').classList.remove('bar1-x')
        document.querySelector('#bar2').classList.remove('bar2-x')
        document.querySelector('#bar3').classList.remove('bar3-x')
    }
})
