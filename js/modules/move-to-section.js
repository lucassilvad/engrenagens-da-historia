export default class MoveToSection {
  constructor(section, options) {
    this.section = document.querySelector(section);
    if (options === undefined)
      this.options = { block: "start", inline: "nearest", behavior: "smooth" };
    else this.options = options;
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    if (event.key === "t") this.section.scrollIntoView(this.options);
  }

  addEvent() {
    window.addEventListener("keydown", this.scrollToSection);
  }

  init() {
    this.addEvent();
  }
}
