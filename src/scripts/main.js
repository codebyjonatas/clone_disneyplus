document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");
  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const positionOfScroll = window.scrollY;
    if (positionOfScroll < alturaHero) {
      ocultaElementosDoHeader();
    } else {
      exibeElementosDoHeader();
    }
  });

  // Seção de atrações, programação das abas
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const abaAlvo = event.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
      esconderTodasAsAbas();
      aba.classList.add("shows__list--is-active");
      removeButtonAtivo();
      event.target.classList.add("shows__tabs__button--is-active");
    });
  });

  // Seção de FAQ, programação das perguntas
  questions.forEach((question) => {
    question.addEventListener("click", abreOuFechaResposta);
  });
});

function abreOuFechaResposta(event) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = event.target.parentNode;
  elementoPai.classList.toggle(classe);
}

function removeButtonAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  buttons.forEach((button) => {
    button.classList.remove("shows__tabs__button--is-active");
  });
}

function esconderTodasAsAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");
  tabsContainer.forEach((tab) => {
    tab.classList.remove("shows__list--is-active");
  });
}

//Seção Botões do Header
function ocultaElementosDoHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function exibeElementosDoHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}
