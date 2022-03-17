# GreenIT

## Docker Dev env


```
docker build -t sample:dev .
docker-compose -f docker-compose.dev.yml up
```

```
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true sample:dev
```

```
docker-compose up -d --build
```