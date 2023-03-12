/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const carouselButton = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image');

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
carouselButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    // - passo 3 - desmarcar o botão selecionado anterior
    disableSelectButtons();

    // - passo 4 - marcar o botão clicado como se estivesse selecionada
    selectCarouselButton(button);

    // - passo 5 - esconder a imagem ativa de fundo
    hideActiveImage();

    // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    showBackgroundImage(index);
  })
})

function showBackgroundImage(index) {
  images[index].classList.add('actived');
}

function hideActiveImage() {
  const activedImage = document.querySelector('.actived');
  activedImage.classList.remove('actived');
}

function selectCarouselButton(button) {
  button.classList.add('selected');
}

function disableSelectButtons() {
  const selectedButton = document.querySelector('.selected');
  selectedButton.classList.remove('selected');
}

