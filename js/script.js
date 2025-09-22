const activeClass = "active";

// Sociedade troca de Imagens

// Seleção de Elementos
const elementosAtivadores = document.querySelectorAll(
  ".sociedade-lista-text li"
);
const elementosParaAtivar = document.querySelectorAll(
  ".sociedade-lista-img li"
);

const ativarImagem = (numeroItem) => {
  elementosParaAtivar.forEach((item, index) => {
    item.classList.remove(activeClass);
    if (index === numeroItem) {
      item.classList.add(activeClass);
    }
  });
};

elementosAtivadores.forEach((item, index) => {
  item.addEventListener("click", () => {
    ativarImagem(index);
  });
});

// Fotos troca

// Seleção de Elementos
const setaMenos1 = document.querySelectorAll(".seta-menos-1");
const setaMais1 = document.querySelectorAll(".seta-mais-1");

const imagemLista1 = document.querySelectorAll("[data-imagem-lista-1] li");

// console.log(imagemLista1);

const mudarImagem = (index) => {
  imagemLista1.forEach((item) => {
    item.classList.remove(activeClass);
    imagemLista1[index].classList.add(activeClass);
    // console.log(imagemLista1[0]);
  });
};

let numeroFoto1 = 0;

const avançarImagem = () => {
  if (numeroFoto1 <= imagemLista1.length - 1) numeroFoto1 = numeroFoto1 + 1;
  if (numeroFoto1 === imagemLista1.length) {
    numeroFoto1 = 0;
  }
  mudarImagem(numeroFoto1);
  // console.log(numeroFoto1);
};

const voltarImagem = () => {
  if (numeroFoto1 >= 0) numeroFoto1 = numeroFoto1 - 1;
  if (numeroFoto1 === -1) numeroFoto1 = imagemLista1.length - 1;
  mudarImagem(numeroFoto1);
  // console.log(numeroFoto1);
};

setaMais1.forEach((item) => {
  item.addEventListener("click", avançarImagem);
});

setaMenos1.forEach((item) => {
  item.addEventListener("click", voltarImagem);
});

// Abrir Tópico

// Seleção de Itens

const topicoItem = document.querySelectorAll(".topicos-lista > li p");
const topicoItemAccordion = document.querySelectorAll(".item-topico-accordion");

const ativarAccordion = (index) => {
  topicoItemAccordion[index].classList.toggle(activeClass);
};

topicoItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    ativarAccordion(index);
  });
});

// Riscar Item

// Seleção de Elementos

const itemTopicoLista = document.querySelectorAll(".item-topico-lista li");

const riscarItem = (event) => {
  event.currentTarget.classList.toggle(activeClass);
};

itemTopicoLista.forEach((item) => {
  item.addEventListener("click", riscarItem);
});

import ScrollSuave from "./modules/scroll-suave.js";
import MoveToSection from "./modules/move-to-section.js";

const scrollSuave = new ScrollSuave("[data-secao-link]");
scrollSuave.init();

const moveToSection = new MoveToSection(".topicos-bg", {
  block: "start",
  inline: "nearest",
  behavior: "smooth",
});
moveToSection.init();

// Troca imagens motor

// Elementos

const imagensMotor = document.querySelectorAll(".motor-lista-img img");

const trocarFoto = (numeroImagem) => {
  imagensMotor.forEach((item) => item.classList.add(activeClass));
  imagensMotor[numeroImagem].classList.remove(activeClass);
};

imagensMotor.forEach((item, index) => {
  item.addEventListener("click", () => {
    trocarFoto(index);
  });
});
