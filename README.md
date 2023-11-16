Repo to test connecting to redis clusters with `redis` nodejs client library.

I was trying to get this to work with docker-compose, but was running int issues. I will work on that later.

For now, it's a manual process which I followed from [this video](https://www.youtube.com/watch?v=N8BkmdZzxDg).

### 1. Install dependencies

```
npm i
```

Start redis nodes

```
npm run start
```

Create cluster

```
npm run create
```

Stop cluster

```
npm run stop
```

Clean up

```
npm run clean
```
