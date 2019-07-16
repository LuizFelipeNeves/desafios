const justify = require("justified");
const defaulttext = `In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.

And God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day.`;

const formattext = (text = defaulttext, limit = 40) => {
  const paragrafos = text.split(/\n\n/);
  let textofinal = "";

  for (let index = 0; index < paragrafos.length; index++) {
    let words = paragrafos[index].split(" ");
    let lenfinal = 0;
    let palavras = [];

    for (let i = 0; i < words.length; i++) {
      let templength = lenfinal + words[i].length + 1;

      if (templength - 1 > limit) {
        if (templength - 1 <= limit) lenfinal -= 1;
        else {
          textofinal += "\n" + palavras.join(" ");
          lenfinal = 0;
          palavras = [];
        }
      }
      palavras.push(words[i]);
      lenfinal += words[i].length + 1;
    }
    textofinal += "\n" + palavras.join(" ") + "\n\n";
  }
  return textofinal;
};

const justified = (text = defaulttext, limit = 40) =>
  justify(text, { width: limit });

module.exports = { formattext, justified, defaulttext };
