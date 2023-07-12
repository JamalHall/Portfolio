class DivGenerator {
  divs = [];

  generateDivs(str) {
    const lineBreak = str.indexOf("\n");
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const div = document.createElement("div");
      div.textContent = char;
      if (lineBreak == i) {
        console.log(str.indexOf("\n"));
        div.classList.add("newLine");
      }
      div.classList.add("title", `delay${Math.floor(Math.random() * 10)}`);
      this.divs.push(div);
    }
    return this.divs;
  }
}

const generator = new DivGenerator();
const divArray = generator.generateDivs("Jamal Hall 2.0 \n Coming Soon");
document.getElementById("parent").append(...divArray);
