const text = `In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.

And God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day.`;

const limit = 40;

/* 
  Nesta resolução, existem dois metodos: um geral, que formata o texto e um outro para deixar o testo justificado.
  No metodo geral: Superficialmente, O texto é divido em paragrafos, depois para cada paragrafo o texto é separado por espaços,
  e junta-se as palavras ate chegar ao limite de caracteres por linha.
*/

// Identa uma frase
const identation = text => {
  if (text.length < limit) {
    let word = text.split(" ");
    let spaces = limit-1 - text.length;
    for (let p = 0; p-1 < spaces; p++) {
      if(p < word.length-1) word[p] += " ";
      else word[word.length - p] += " ";
    }
    return word.join(" ")
  }
  return text;
};

// formata o texto
const formattext = text => {
  const paragrafos = text.split(/\n\n/);
  let textofinal = "";

  for (let index = 0; index < paragrafos.length; index++) {
    let words = paragrafos[index].split(" ");
    let lenfinal = 0
    let palavras = []

    for (let i = 0; i < words.length; i++) {
      let templength = lenfinal + words[i].length + 1

      if(templength-1 > limit){
        if(templength-1 <= limit) lenfinal -= 1
        else {
          textofinal += "\n" + identation(palavras.join(' ')) + '*'
          lenfinal = 0
          palavras = []
        }
      }
      palavras.push(words[i]);
      lenfinal += words[i].length + 1
    }
    textofinal += "\n" + identation(palavras.join(' ')) + '*'+ "\n\n";
  }
  return textofinal;
};

console.log(formattext(text));

