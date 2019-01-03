# test-docker

[![dependencies](https://david-dm.org/piecioshka/test-docker.svg)](https://github.com/piecioshka/test-docker)

:ledger: Testing Docker with simple Node.js app

## Features

* :white_check_mark: Create [Dockerfile](./blob/master/Dockerfile)
* :white_check_mark: Create [.dockerignore`](./blob/master/.dockerignore)

## Usage

```javascript
docker build -t piecioshka/demo:1 .
docker run --rm piecioshka/demo:1
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
