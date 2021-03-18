# Vue Spruce Party

![Build](https://github.com/crishellco/vue-spruce/workflows/Build/badge.svg)
![](badges/badge-branches.svg)
![](badges/badge-functionss.svg)
![](badges/badge-lines.svg)
![](badges/badge-statements.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/e1f2536b9be3c32e6fef/maintainability)](https://codeclimate.com/github/crishellco/vue-spruce/maintainability)

A collection of useful Vue renderless components.

Check out the [demo](https://vue-spruce.netlify.app/)

## Install

```bash
yarn add -D @crishellco/vue-spruce
# or
npm i -D @crishellco/vue-spruce
```

## Usage
### Importing
#### Vue Plugin

```javascript
import Vue from 'vue';
import VueSpruce from '@crishellco/vue-spruce';

Vue.use(VueSpruce);
```
#### Named Imports

```javascript
import {
  SpruceEvent,
  SpruceFunction,
  SprucePaginate,
  SpruceSearch,
  SpruceSort,
  SpruceState,
  SpruceToggle
} from '@crishellco/vue-spruce';

export default {
  components: {
    SpruceEvent,
    SpruceFunction,
    SprucePaginate,
    SpruceSearch,
    SpruceSort,
    SpruceState,
    SpruceToggle
  }
};
```

### The Components

#### `SpruceEvent`

```javascript
<spruce-event
  event="mouseover"
  @mouseover="someMethod"
>
  <button>Hover over me!</button>
</spruce-event>
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

#### `SpruceFunction`

```javascript
<div v-for="num in 10">
  <spruce-function :fn="() => alert(num)">
    <button slot-scope="{ fn }" @click="fn">Click me!</button>
  </spruce-function>
</div>
```
##### Props

| Name | Description  | Type     | Required | Default |
|------|--------------|----------|----------|---------|
| `fn` | The function | Function | Yes      |         |

##### Slot Scope

| Name | Description  | Type     |
|------|--------------|----------|
| `fn` | The function | function |

#### `SprucePaginate`

```javascript
<div v-for="num in 10">
  <spruce-paginate :list="states" :size="15">
    <div slot-scope="{ page, next, prev, pageNum, totalPages, isFirst, isLast, rangeStart, rangeEnd }">
      <button
        :disabled="isFirst"
        @click="prev"
      >
        prev
      </button>
      <div class="px-4 flex flex-col items-center">
        <div>Page: {{ pageNum }}/{{ totalPages }}</div>
        <div>Showing: {{ rangeStart }} - {{ rangeEnd }} of {{ states.length }}</div>
      </div>
      <button
        :disabled="isLast"
        @click="next"
      >
        next
      </button>
    </div>
  </spruce-paginate>
</div>
```
##### Props

| Name   | Description           | Type       | Required | Default |
|--------|-----------------------|------------|----------|---------|
| `size` | Page size             | Number     | Yes      |         |
| `list` | The items to paginate | Array<any> | Yes      |         |

##### Slot Scope

| Name         | Description                   | Type     |
|--------------|-------------------------------|----------|
| `isFirst`    | If currently on first page    | Boolean  |
| `isLast`     | If currently on last page     | Boolean  |
| `next`       | Go to next page               | Function |
| `page`       | The current page              | any      |
| `pageNum`    | The current page number       | Number   |
| `prev`       | Go to previous page           | Function |
| `rangeEnd`   | The end of the current page   | Number   |
| `rangeStart` | The start of the current page | Number   |
| `reset`      | Reset the state of pagination | Function |
| `totalPages` | Total number of pages         | Number   |


#### `SpruceSearch`

```javascript
<spruce-search :list="states" :term="term" :keys="['name', 'email']">
  <div slot-scope="{ results }">
    <div v-for="(item, index) in results" :key="index">
      {{ item }}
    </div>
  </div>
</spruce-search>
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

#### `SpruceSort`

```javascript
<spruce-sort :list="people" :by="by" :direction="direction" >
  <div slot-scope="{ results }">
      <div v-for="(item, index) in results" :key="index">
        {{ item }}
      </div>
  </div>
</spruce-sort>
```
##### Props

| Name        | Description                               | Type       | Required | Default |
|-------------|-------------------------------------------|------------|----------|---------|
| `list`      | The list to search                        | Array<any> | Yes      |         |
| `direction` | The direction to sort in, 'asc' or 'desc' | String     | No       | 'asc'   |
| `by`        | The object property to sort by            | String     | No       | ''      |

#### `SpruceState`

```javascript
<spruce-state :value="{ count: 0 }">
  <div slot-scope="{ state, update }">
    <button @click="update({count: state.count + 1})">
      Increment ({{ state.count }})
    </button>
  </div>
</spruce-state>
```
##### Props

| Name    | Description      | Type   | Required | Default |
|---------|------------------|--------|----------|---------|
| `value` | The state object | Object | Yes      |         |

##### Slot Scope

| Name               | Description                                | Type     |
|--------------------|--------------------------------------------|----------|
| `state`            | The state                                  | Object   |
| `update(newValue)` | Merges `newValue` with the current `state` | Function |

##### Events


| Name    | Description              | Payload |
|---------|--------------------------|---------|
| `input` | Fired when state updates | `state` |

#### `SpruceToggle`

```javascript
<spruce-toggle :value="true">
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
</spruce-toggle>
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

### Examples
See the [demo source code](src/demo) for real-world examples. Check out the [demo](https://vue-spruce.netlify.app/) to see the components in action with code examples.

## Lint

```bash
yarn lint
```

## Test

```bash
yarn test:unit
```

## Build Dist

```bash
yarn build
```

## Run Demo

```bash
yarn serve
```

## Build Demo

```bash
yarn build:demo
```

## How to Contribute

### Pull Requests

1. Fork the repository
2. Create a new branch for each feature or improvement
3. Send a pull request from each feature branch to the **develop** branch

## License

[MIT](http://opensource.org/licenses/MIT)
