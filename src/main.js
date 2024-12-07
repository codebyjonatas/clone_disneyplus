document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (botao) => {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      esconderTodasAsAbas();
      aba.classList.add("shows__list--is-active");
      removeButtonAtivo();
      botao.target.classList.add("shows__tabs__button--is-active");
    });
  }
});

function removeButtonAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function esconderTodasAsAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
