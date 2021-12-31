# test-docker

:ledger: Testing Docker with simple Node.js app

## Features

* :white_check_mark: Run simple Node.js app with Docker

## Step by step 👣

* Create `Dockerfile`
* Create `.dockerignore`
* Create `src/index.js` with "hello world" app

## Usage

```bash
docker build -t piecioshka/demo:1 .
docker run piecioshka/demo:1
```

## Related

* [test-docker-http](https://github.com/piecioshka/test-docker-http) - HTTP server in Node.js with Docker
* [test-docker-express-mongo](https://github.com/piecioshka/test-docker-express-mongo) - Two apps: Express.js and MongoDB with Docker

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019
