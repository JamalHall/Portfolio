class DivGenerator {
  constructor() {
    this.container = document.createElement("div");
  }

  generateDivs(str) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const div = document.createElement("div");
      div.textContent = char;
      div.classList.add("title", `delay${Math.ceil(Math.random() * 10)}`);
      this.container.appendChild(div);
    }

    return this.container;
  }
}

const generator = new DivGenerator();
const container = generator.generateDivs("Jamal Hall Is Coming Soon");
document.body.appendChild(container);
