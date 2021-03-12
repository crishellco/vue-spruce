# Vue Renderless Party

<!-- ![Build](https://github.com/crishellco/vue-renderless-party/workflows/Build/badge.svg)
![](badges/badge-branches.svg)
![](badges/badge-functionss.svg)
![](badges/badge-lines.svg)
![](badges/badge-statements.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/e1f2536b9be3c32e6fef/maintainability)](https://codeclimate.com/github/crishellco/vue-renderless-party/maintainability) -->

A collection of useful Vue renderless components.

## Install

```bash
yarn add -D @crishellco/vue-renderless-party
# or
npm i -D @crishellco/vue-renderless-party
```

```javascript
import VueHubble from '@crishellco/vue-renderless-party';
```

## Usage
### Import Components
#### Vue Plugin
```javascript
import Vue from 'vue';
import VueRenderlessParty from '@crishellco/vue-renderless-party';

Vue.use(VueRenderlessParty);
```
#### Single Components
```javascript
import { RenderlessEvent, RenderlessState, RenderlessToggle } from '@crishellco/vue-renderless-party';

export default {
  components: {
    RenderlessEvent,
    RenderlessState,
    RenderlessToggle
  }
};
```

### Components
Coming soon...
## Lint

```bash
yarn lint
```

## Test

```bash
yarn test
```

## Build Dist

```bash
yarn build
```

## How to Contribute

### Pull Requests

1. Fork the repository
2. Create a new branch for each feature or improvement
3. Send a pull request from each feature branch to the **develop** branch

## License

[MIT](http://opensource.org/licenses/MIT)
