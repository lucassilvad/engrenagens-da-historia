export default class ScrollSuave {
  constructor(links, options) {
    this.links = [...document.querySelectorAll(links)];

    if (options === undefined)
      this.options = { block: "start", inline: "nearest", behavior: "smooth" };
    else this.options = options;

    this.ScrollToSection = this.ScrollToSection.bind(this);
  }

  ScrollToSection(event) {
    event.preventDefault();
    const hrefSection = event.currentTarget.getAttribute("href");
    const section = document.querySelector(hrefSection);
    section.scrollIntoView(this.options);
  }

  addEvent() {
    this.links.forEach((item, index) => {
      item.addEventListener("click", this.ScrollToSection);
    });
  }

  init() {
    this.addEvent();
  }
}
