const { formattext, justified, defaulttext } = require("./funcs");

/* 
  O texto é divido em paragrafos, depois é separado as palavras,
  e no fim junta-se as palavras ate chegar ao limite de caracteres por linha.
*/

(() => {
  const limit = parseInt(process.argv[3]);
  const text = process.argv[2];
  const formtext = formattext(text, limit);

  console.log(formtext);
  console.log(justified(formtext, limit));
})();
