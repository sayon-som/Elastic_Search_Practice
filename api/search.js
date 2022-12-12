const client=require("../app")
async function read() {
  const res = await client.search({
    index: "game-of-thrones",
    body: {
      query: {
        match: { quote: "winter" },
      },
    },
  });
  console.log(res.hits.hits);
}
read().catch(console.log)


