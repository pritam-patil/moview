![React: v16](https://img.shields.io/badge/react-v16.7-blue.svg)
![material-ui: v3.0](https://img.shields.io/badge/semantic--ui--react-v0.84-ff69b4.svg)
![webpack: v4.12.1](https://img.shields.io/badge/webpack-v4.12.1-yellow.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)
![Build: passing](https://img.shields.io/badge/build-passing-green.svg)

## Find movie to watch!
### [Live Demo](http://moview.surge.sh/)  :fries:

## Features:
* Built using semantic-ui for React
* Find a movie with custom filters - genre / rating / year / runtime

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have following installed to use the software -


* [npm](https://www.npmjs.com/get-npm) / [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)
* [node](https://nodejs.org/en/download/)
* [git](https://www.atlassian.com/git/tutorials/install-git)

## Setup

To get a copy of this project and start developing,

```bash
git clone https://github.com/pritam-patil/moview.git
cd moview
yarn
```

### Running the project

To develop the project locally, you need only do -


```bash
yarn start
```

> With hot reloading support, the app will start getting server on port 3000.

To run the production mode for deployment purposes, do -

```bash
npm run prebuild
```
> *dist* directory would be created by running above command.

## Known issues:

1. If styles are not loaded, try rebuilding node-sass,

```bash
npm rebuild node-sass
```

### TODO:
- Setup travisCI for CI/CD
- Add test framework with Enzyme-Jest
- Add storybook
- Add lint, prettier, node serve


## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* [**Pritam Patil**](https://github.com/pritam-patil)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
