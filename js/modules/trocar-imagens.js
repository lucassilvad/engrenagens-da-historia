export default function trocarImagens(activeClass) {
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
}
