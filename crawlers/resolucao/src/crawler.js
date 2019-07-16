const rp = require("request-promise");

const Validthread = number => parseInt(number) >= 5000;

const getInfo = json => {
  const messages = [];
  const data = json.data.children;
  const base = "https://old.reddit.com";

  data.forEach(element => {
    if (Validthread(element.data.score)) {
      messages.push(
        `upvotes: ${element.data.score /* ups */} \n subreddit: ${
          element.data.subreddit
        } \n title: ${element.data.title} \n comments: ${base +
          element.data.permalink} \n thread: ${base +
          element.data.permalink} \n\n`
      );
    }
  });
  return messages;
};

const crawler = async subreddits => {
  const limit = 100;

  const messages = await subreddits.reduce(async (lastMessages, sub) => {
    lastMessages = await lastMessages;

    const base = `https://old.reddit.com/r/${sub}/hot/.json?sort=topno&limit=${limit}`;
    let last = undefined;

    while (true) {
      const url = last ? base : base + `&after=${last}`;
      const response = await rp.get(url);
      const data = getInfo(JSON.parse(response)).join("");
      await lastMessages.push(data);

      // check next page..
      if (data.length !== limit) break;
      else last = data.after;
    }

    return lastMessages;
  }, Promise.resolve([]));

  return messages.length > 0 ? messages.join("") : "Mensagem vazia...";
};

module.exports = { crawler };
