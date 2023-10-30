import { createClient, createCluster } from "redis";

const redisCluster = async () => {
  const cluster = createCluster({
    rootNodes: [
      { url: "redis://localhost:7000" },
      { url: "redis://localhost:7001" },
      { url: "redis://localhost:7002" },
    ],
    useReplicas: true,
  });

  await cluster.connect();

  cluster.on("error", (err) => console.log("Redis Cluster Error", err));

  console.log(JSON.stringify(cluster.shards, null, 2));

  await cluster.disconnect();
};

// redisCluster();

const redisClient = async () => {
  const client = createClient({ url: "redis://localhost:7000" });
  await client.connect();
  await client.set("name", "raj");
  await client.keys("*");
  await client.disconnect();
};
