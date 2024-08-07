const express = require("express");
const axios = require("axios").default
const app = express();
const client = require("./RedisConnClient")
app.get("/", async (req, res) => {
  try {
    const cacheValue = await client.get('demo')
    if(cacheValue) {
        return res.status(201).send({
            message: "data send",
            data: JSON.parse(cacheValue),
          });
    }
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await client.set('demo',JSON.stringify(data))
    await client.expire('demo',30)
    return res.status(201).send({
      message: "data send",
      data: data,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});

app.listen(5000, () => {
  console.log("Server Start");
});
