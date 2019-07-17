const crawler = require("./crawler");

(async () => {
  const text = process.argv[2] || "cats;brazil";
  const subreddits = text.split(";");
  console.log(await crawler(subreddits));
})();
