# Microfront Sample

## Requirements

* [Nodejs](https://nodejs.org/)
* [Angular CLI](https://github.com/angular/angular-cli) v8.0.6.

### Clone project

```bash
$ git clone --recurse-submodules https://github.com/ferias-co/basic-microfront-sample.git
```

### Install dependencies

```bash
$ npm install
```

### Download Docker Images

```bash
$ docker-compose pull
```

### Start Backend using Docker

```bash
$ docker-compose up --build
```

### Build library

```bash
$ ng build movimento-reserva --watch
```

Note: The `--watch` statement makes the project listen to changes in the `project/movimento-reserva/src` folder and automatically rebuild.

### Start main project

```bash
$ ng serve -o
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the main project source files.


### Build main project

```bash
$ ng build
```

### Lint

```bash
$ npm run lint
```

### Unit Test
To execute the unit tests via Karma.
```bash
$ ng test
```
