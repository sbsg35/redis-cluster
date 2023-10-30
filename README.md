## Getting started

Repo to test connecting to redis clusters with `redis` nodejs client library.

I was trying to get this to work with docker-compose, but was running int issues. I will work on that later.

For now, it's a manual process which I followed from [this video](https://www.youtube.com/watch?v=N8BkmdZzxDg).

### 1. Install dependencies

```
npm i
```

### 2. Start redis nodes

Run this for all directories in seperate terminals.

```
cd 7000
redis-cli redis.conf
```

### 3. Create a cluster

This will create 6 nodes, 3 primary and 3 replica nodes

```
redis-cli --cluster create \
127.0.0.1:7000 \
127.0.0.1:7001 \
127.0.0.1:7002 \
127.0.0.1:7003 \
127.0.0.1:7004 \
127.0.0.1:7005 \
--cluster-replicas 1
```

If you want to just create 1 primary and 1 replica then this:

```
redis-cli --cluster create \
127.0.0.1:7000 \
127.0.0.1:7001 \
--cluster-replicas 1
```

### 4. Run scripts

Run whatever you want in the index.ts file

```
npm run start
```
