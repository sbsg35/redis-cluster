# Redis cluster local setup

Repo to test redis clusters locally. You need `redis` installed on your machine. This will work on Macos, can't guarantee other OS.

```
brew install redis
```

```
npm i
```

```
npm run start # start redis nodes
```

```
npm run create # create cluster
```

```
npm run stop # stop cluster
```

```
npm run clean # cleanup
```

## Updating settings

You can update the cluster settings in the `create-cluster.sh` file.

Shell script original source: https://github.com/redis/redis/blob/unstable/utils/create-cluster/create-cluster
