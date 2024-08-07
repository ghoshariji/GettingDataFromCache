const client = require("./RedisConnClient");

async function redisCall() {
  try {
    await client.set("name", "ghosh");
    // expire some value after the some time (after 10 sec)
    //await client.expire("name", 10);

    // implementing value using the lpush and rpush -> pushing the data into the List(in redis database)

    // also there have a functionlity name is blockiing content (using blpop and blmove 10)

    // reading message in the redis database

    // lrange message 0 -1
    // lrange message 0 1

    // using redis set for the unique element as a unordered set

    
    const data = await client.get("name");
    console.log(data);
  } catch (err) {
    console.error("Error fetching data from Redis:", err);
  }
}

redisCall();
