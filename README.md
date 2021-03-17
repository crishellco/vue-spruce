# Vue Renderless Party

![Build](https://github.com/crishellco/vue-renderless-party/workflows/Build/badge.svg)
![](badges/badge-branches.svg)
![](badges/badge-functionss.svg)
![](badges/badge-lines.svg)
![](badges/badge-statements.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/e1f2536b9be3c32e6fef/maintainability)](https://codeclimate.com/github/crishellco/vue-renderless-party/maintainability)

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
### Importing
#### Vue Plugin

```javascript
import Vue from 'vue';
import VueRenderlessParty from '@crishellco/vue-renderless-party';

Vue.use(VueRenderlessParty);
```
#### Named Imports

```javascript
import { RenderlessEvent, RenderlessSearch, RenderlessSort, RenderlessState, RenderlessToggle } from '@crishellco/vue-renderless-party';

export default {
  components: {
    RenderlessEvent,
    RenderlessSearch,
    RenderlessSort,
    RenderlessState,
    RenderlessToggle
  }
};
```

### The Components

#### `RenderlessEvent`

```javascript
<renderless-event
  event="mouseover"
  @mouseover="someMethod"
>
  <button>Hover over me!</button>
</renderless-event>
```
##### Props

| Name      | Description                                                   | Type    | Required | Default |
|-----------|---------------------------------------------------------------|---------|----------|---------|
| `event`   | The event to listen to                                        | String  | Yes      |         |
| `outside` | Listen for the even only outside of the default slot elements | Boolean | No       | `false` |


##### Events

| Name                       | Description                   | Payload |
|----------------------------|-------------------------------|---------|
| _Same as the `event` prop_ | Fired when the event happens. | --      |

#### `RenderlessSearch`

```javascript
<renderless-search :list="states" :term="term" :keys="['name', 'email']">
  <div slot-scope="{ results }">
    <div v-for="(item, index) in results" :key="index">
      {{ item }}
    </div>
  </div>
</renderless-search>
```
##### Props

| Name   | Description             | Type                  | Required | Default                                                                         |
|--------|-------------------------|-----------------------|----------|---------------------------------------------------------------------------------|
| `keys` | The keys to search in   | Array<String>         | No       | If `list` is Array<Object> then all of the first object's keys. Otherwise `[]`. |
| `list` | The list to search      | Array<String, Object> | Yes      |                                                                                 |
| `term` | The terms to search for | String                | No       | ''                                                                              |

##### Slot Scope

| Name      | Description       | Type                  |
|-----------|-------------------|-----------------------|
| `results` | The searched list | Array<String, Object> |

#### `RenderlessSort`

```javascript
<renderless-sort :list="people" :by="by" :direction="direction" >
  <div slot-scope="{ results }">
      <div v-for="(item, index) in results" :key="index">
        {{ item }}
      </div>
  </div>
</renderless-sort>
```
##### Props

| Name        | Description                               | Type                  | Required | Default |
|-------------|-------------------------------------------|-----------------------|----------|---------|
| `list`      | The list to search                        | Array<String, Object> | Yes      |         |
| `direction` | The direction to sort in, 'asc' or 'desc' | String                | No       | 'asc'   |
| `by`        | The object property to sort by            | String                | No       | ''      |

#### `RenderlessState`

```javascript
<renderless-state :value="{ count: 0 }">
  <div slot-scope="{ state, update }">
    <button @click="update({count: state.count + 1})">
      Increment ({{ state.count }})
    </button>
  </div>
</renderless-state>
```
##### Props

| Name    | Description      | Type        | Required | Default |
|---------|------------------|-------------|----------|---------|
| `value` | The state object | Object<any> | Yes      |         |

##### Slot Scope

| Name               | Description                                | Type     |
|--------------------|--------------------------------------------|----------|
| `state`            | The state                                  | Object   |
| `update(newValue)` | Merges `newValue` with the current `state` | Function |

##### Events


| Name    | Description              | Payload |
|---------|--------------------------|---------|
| `input` | Fired when state updates | `state` |

#### `RenderlessToggle`

```javascript
<renderless-toggle :value="true">
  <div slot-scope="{ isOn, on, off, toggle }">
    <div>
      <span>Accordion header</span>
      <span @click="toggle">{{ isOn ? '▲' : '▼' }}</span>
    </div>
    <div v-if="isOn">
      Accordion content
    </div>
    <div>
      <button @click="on">Open</button>
      <button @click="off">Close</button>
    </div>
  </div>
</renderless-toggle>
```
##### Props

| Name    | Description             | Type    | Required | Default |
|---------|-------------------------|---------|----------|---------|
| `value` | The state of the toggle | Boolean | No       | `False` |

##### Slot Scope

| Name       | Description             | Type     |
|------------|-------------------------|----------|
| `isOn`     | The state of the toggle | Boolean  |
| `on()`     | Sets `isOn` to `true`   | Function |
| `off()`    | Sets `isOn` to `false`  | Function |
| `toggle()` | Toggles `isOn`          | Function |

##### Events

| Name    | Description               | Payload |
|---------|---------------------------|---------|
| `input` | Fired when `isOn` updates | `isOn`  |


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
