const { formattext, justified, defaulttext } = require("./funcs");

/* 
  O texto é divido em paragrafos, depois é separado as palavras, e no fim e junta-se as palavras ate chegar ao limite de caracteres por linha.
*/

(() => {
  const limit = parseInt(process.argv[3] || 40);
  const text = formattext(process.argv[2], limit);

  console.log(text);
  console.log(justified(text, limit));
})();
