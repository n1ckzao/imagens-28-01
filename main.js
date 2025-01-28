"use strict"

const botaoTrocaImagem = document.getElementById('troca-imagem')
const imagem = [
    './patrulha canina.jpg',
    './patrulha canina2.jpg',
    './patrulha canina3.jpg',
    './patrulha canina4.jpg',
    './patrulha canina5.jpg'
]
function trocaImagem () {
    document.documentElement.style.setProperty('--imagem-fundo')
}

botaoTrocaCor.addEventListener('click', trocaImagem)