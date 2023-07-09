class DivGenerator {
  divs = [];

  generateDivs(str) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const div = document.createElement("div");
      div.textContent = char;
      div.classList.add("title", `delay${Math.ceil(Math.random() * 10)}`);
      this.divs.push(div);
    }
    return this.divs;
  }
}

const generator = new DivGenerator();
const container = generator.generateDivs("Jamal Hall Is Coming Soon");

document.getElementById("container").append(...container);
