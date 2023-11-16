import * as Redis from "ioredis";

const myF = async () => {
  const cluster = new Redis.Cluster([
    {
      port: 7000,
      host: "127.0.0.1",
    },
    {
      port: 7001,
      host: "127.0.0.1",
    },
    {
      port: 7002,
      host: "127.0.0.1",
    },
  ]);
  try {
    cluster.on("node error", (err) => console.error(err));
    const d = await cluster.set("name123", "raj");
    console.log(await cluster.get("name123"));
    console.log({ d });
  } catch (error) {
    console.error({ error });
  } finally {
    cluster.quit();
  }
};

myF();
