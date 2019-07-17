const { formattext, justified, defaulttext } = require("./funcs");

(() => {
  const limit = parseInt(process.argv[3] || 40);
  const text = formattext(process.argv[2], limit);

  console.log(text);
  console.log(justified(text, limit));
})();
