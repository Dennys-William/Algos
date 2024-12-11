// Seleciona os elementos do botão de hambúrguer e do menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Adiciona evento de clique para alternar o menu em dispositivos móveis
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


