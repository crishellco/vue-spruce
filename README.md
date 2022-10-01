# Vue Spruce

![Build](https://github.com/crishellco/vue-spruce/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/crishellco/vue-spruce/branch/master/graph/badge.svg?token=M7N86U5GF7)](https://codecov.io/gh/crishellco/vue-spruce)
[![Maintainability](https://api.codeclimate.com/v1/badges/e1f2536b9be3c32e6fef/maintainability)](https://codeclimate.com/github/crishellco/vue-spruce/maintainability)

A collection of useful Vue 2 renderless components.

Check out the [demo](https://vue-spruce.netlify.app/)

- [Install](#install)
- [The Components](#the-components)
  - [SpruceAtLeast](#spruceatleast)
  - [SpruceCling](#sprucecling)
  - [SpruceEvent](#spruceevent)
  - [SpruceFetch](#sprucefetch)
  - [SpruceFunction](#sprucefunction)
  - [SprucePaginate](#sprucepaginate)
  - [SpruceSearch](#sprucesearch)
  - [SpruceSort](#sprucesort)
  - [SpruceState](#sprucestate)
  - [SpruceToggle](#sprucetoggle)
  - [SpruceWatch](#sprucewatch)
- [Examples](#examples)
- [Development](#development)
- [How to Contribute](#how-to-contribute)
  - [Pull Requests](#pull-requests)
- [License](#license)

## Install

### Package

```bash
yarn add -D @crishellco/vue-spruce
# or
npm i -D @crishellco/vue-spruce
```

### Vue Plugin

Installs all components globally.

```javascript
import Vue from 'vue';
import VueSpruce from '@crishellco/vue-spruce';

Vue.use(VueSpruce);
// or with options
Vue.use(VueSpruce, { componentPrefix: 's' });
```

### Nuxt Module

Installs all components globally.

```javascript
// nuxt.config.js
{
  modules: [['@crishellco/vue-spruce/nuxt', { componentPrefix: 's' }]];
}
```

#### Options

| Name              | Description                                         | Default  |
|-------------------|-----------------------------------------------------|----------|
| `componentPrefix` | The prefix used when installing components globally | `spruce` |

### Named Imports

Alternatively, use only the components you need.

```javascript
import {
  SpruceAtLeast,
  SpruceCling,
  SpruceEvent,
  SpruceFetch,
  SpruceFunction,
  SprucePaginate,
  SpruceSearch,
  SpruceSort,
  SpruceState,
  SpruceToggle,
  SpruceWatch,
} from '@crishellco/vue-spruce';

export default {
  components: {
    SpruceAtLeast,
    SpruceCling,
    SpruceEvent,
    SpruceFetch,
    SpruceFunction,
    SprucePaginate,
    SpruceSearch,
    SpruceSort,
    SpruceState,
    SpruceToggle,
    SpruceWatch,
  },
};
```

## The Components

### SpruceAtLeast

Ensures a component shows for at least a given amount of time, in milliseconds, before hiding.

```html
<spruce-at-least :ms="5000" :show="shouldShowImage">
  <div slot-scope="{ disabled, show }">
    <img v-if="show" src="http://www.fillmurray.com/g/200/300" alt="" />

    <button :disabled="disabled" @click="shouldShowImage = !shouldShowImage">
      {{ disabled ? 'waiting...' : show ? 'hide' : 'show' }}
    </button>
  </div>
</spruce-at-least>
```

#### Props

| Name   | Description                                                        | Type    | Required | Default |
|--------|--------------------------------------------------------------------|---------|----------|---------|
| `ms`   | Minimum amount of time to show, in milliseconds                    | Number  | Yes      |         |
| `show` | Weather or not to show the contents (given enough time has passed) | Boolean | No       | `true`  |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name       | Description                                                | Type    |
|-----------|------------|------------------------------------------------------------|---------|
| `default` | `disabled` | True if waiting to hide content after `ms` time has passed | Boolean |
| `default` | `show`     | If the contents should be shown                            | Boolean |

### SpruceCling

Clings the `clinger` slot's contents to the `anchor` slot's contents using `popper.js`. Great for things like dropdown menus. _See the [demo](https://vue-spruce.netlify.app/) for more context._

```html
<spruce-cling placement="bottom">
  <template #anchor>
    <button>
      i'm a button
    </button>
  </template>
  <template #clinger>
    <div>
      <div>i'm a clinger!</div>
    </div>
  </template>
</spruce-cling>
```

#### Props

| Name        | Description                                                                                                                  | Type   | Required | Default |
|-------------|------------------------------------------------------------------------------------------------------------------------------|--------|----------|---------|
| `modifiers` | The [popper.js modifiers](https://popper.js.org/docs/v2/modifiers/)                                                          | Array  | No       | `[]`    |
| `placement` | The [popper.js placement](https://popper.js.org/docs/v2/constructors//#options) of the `clinger` in relation to the `anchor` | String | No       | `auto`  |

#### Slots

| Name      | Required |
|-----------|----------|
| `anchor`  | Yes      |
| `clinger` | Yes      |

#### Slot Scope

| Slot      | Name     | Description                 | Type     |
|-----------|----------|-----------------------------|----------|
| `anchor`  | `update` | Updates the popper instance | Function |
| `clinger` | `update` | Updates the popper instance | Function |

### SpruceEvent

Track any `window` event occurance inside or outside of `SpruceEvent`'s default slot.

```html
<spruce-event event="mouseover" @mouseover="someMethod">
  <button>Hover over me!</button>
</spruce-event>
```

#### Props

| Name        | Description                                                   | Type    | Required | Default |
|-------------|---------------------------------------------------------------|---------|----------|---------|
| `event`     | The event to listen to                                        | String  | Yes      |         |
| `immediate` | First event immediately (in `mounted`)                        | Boolean | No       | `false` |
| `outside`   | Listen for the even only outside of the default slot elements | Boolean | No       | `false` |

#### Events

| Name                       | Description                   | Payload |
|----------------------------|-------------------------------|---------|
| _Same as the `event` prop_ | Fired when the event happens. | --      |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | No       |

### SpruceFetch

Make asynchronous API fetch calls.

```html
<spruce-fetch url="api.google.com/users" >
  <div slot-scope="{ loading, data, error, fetch }">
    <loading-indicator v-if="loading" />
    <div v-else-if="errors">Errors! {{ error.status }}</div>
    <div v-else>Data: {{ data }}</div>
    <button @click="fetch">Refetch</button>
  <div>
</spruce-fetch>
```

#### Props

| Name        | Description                                                | Type    | Required | Default |
|-------------|------------------------------------------------------------|---------|----------|---------|
| `url`       | The API url (changing this will refetch and rest all data) | String  | Yes      |         |
| `immediate` | Weather to immediate make the request on mount             | Boolean | No       | `true`  |

#### Events

| Name      | Description                          | Payload                           |
|-----------|--------------------------------------|-----------------------------------|
| `success` | Fires when the request is successful | `{data: Object, fetch: Function}` |
| `error`   | Fires when the request fails         | `{data: Object, fetch: Function}` |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name      | Description                          | Type                               |
|-----------|-----------|--------------------------------------|------------------------------------|
| `default` | `calls`   | Number of calls made                 | Number                             |
| `default` | `data`    | The response on a successful request | Object                             |
| `default` | `error`   | The response on a failed request     | `{ data: Object, status: Number }` |
| `default` | `loading` | Whether a request is in progress     | Boolean                            |
| `default` | `fetch`   | Makes another request                | Function                           |

### SpruceFunction

Create reusable functions on the fly (great for lists!).

```html
<div v-for="num in 10">
  <spruce-function :fn="() => alert(num)">
    <button slot-scope="{ fn }" @click="fn">Click me!</button>
  </spruce-function>
</div>
```

#### Props

| Name | Description  | Type     | Required | Default |
|------|--------------|----------|----------|---------|
| `fn` | The function | Function | Yes      |         |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name | Description  | Type     |
|-----------|------|--------------|----------|
| `default` | `fn` | The function | Function |

### SprucePaginate

Paginate an array and navigate through it's chunks.

```html
<spruce-paginate :list="states" :size="15">
  <div slot-scope="{ page, next, prev, pageNum, totalPages, isFirst, isLast, rangeStart, rangeEnd }">
    <button :disabled="isFirst" @click="prev">
      prev
    </button>
    <div class="px-4 flex flex-col items-center">
      <div>Page: {{ pageNum }}/{{ totalPages }}</div>
      <div>Showing: {{ rangeStart }} - {{ rangeEnd }} of {{ states.length }}</div>
    </div>
    <button :disabled="isLast" @click="next">
      next
    </button>
  </div>
</spruce-paginate>
```

#### Props

| Name   | Description           | Type       | Required | Default |
|--------|-----------------------|------------|----------|---------|
| `size` | Page size             | Number     | Yes      |         |
| `list` | The items to paginate | Array<any> | Yes      |         |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name         | Description                                                                                   | Type     |
|-----------|--------------|-----------------------------------------------------------------------------------------------|----------|
| `default` | `first`      | Go to first page                                                                              | Function |
| `default` | `go`         | Go to specific page                                                                           | Function |
| `default` | `isFirst`    | If currently on first page                                                                    | Boolean  |
| `default` | `isLast`     | If currently on last page                                                                     | Boolean  |
| `default` | `last`       | Go to last page                                                                               | Function |
| `default` | `next`       | Go to next page                                                                               | Function |
| `default` | `page`       | The current page                                                                              | any      |
| `default` | `pages`      | The chunked pages                                                                             | Array    |
| `default` | `links`      | A calculated array of specific page numbers that can be used for links `[1, 2, 3, '...', 40]` | Array    |
| `default` | `pageNum`    | The current page number                                                                       | Number   |
| `default` | `prev`       | Go to previous page                                                                           | Function |
| `default` | `rangeEnd`   | The end of the current page                                                                   | Number   |
| `default` | `rangeStart` | The start of the current page                                                                 | Number   |
| `default` | `reset`      | Reset the state of pagination                                                                 | Function |
| `default` | `totalPages` | Total number of pages                                                                         | Number   |

### SpruceSearch

Search an array of strings or objects by keys using [fuse.js](https://fusejs.io/).

```html
<spruce-search :list="states" :term="term" :keys="['name', 'email']">
  <div slot-scope="{ results }">
    <div v-for="(item, index) in results" :key="index">
      {{ item }}
    </div>
  </div>
</spruce-search>
```

#### Props

| Name        | Description             | Type   | Required | Default                                                                           |
|-------------|-------------------------|--------|----------|-----------------------------------------------------------------------------------|
| `keys`      | The keys to search in   | Array  | No       | If `list` is `Array<Object>` then all of the first object's keys. Otherwise `[]`. |
| `list`      | The list to search      | Array  | Yes      |                                                                                   |
| `term`      | The terms to search for | String | No       | ''                                                                                |
| `threshold` | Fuse.js match threshold | Float  | No       | 0.6                                                                               |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name      | Description       | Type  |
|-----------|-----------|-------------------|-------|
| `default` | `results` | The searched list | Array |

### SpruceSort

Sort an array of strings or objects in either direction by specific keys. 

_Note: string sorting is case insensitive._

```html
<spruce-sort :list="people" :by="by" :direction="direction">
  <div slot-scope="{ results }">
    <div v-for="(item, index) in results" :key="index">
      {{ item }}
    </div>
  </div>
</spruce-sort>
```

#### Props

| Name        | Description                               | Type   | Required | Default |
|-------------|-------------------------------------------|--------|----------|---------|
| `list`      | The list to search                        | Array  | Yes      |         |
| `direction` | The direction to sort in, 'asc' or 'desc' | String | No       | 'asc'   |
| `by`        | The object property to sort by            | String | No       | ''      |

#### Events

| Name     | Description                                       | Payload   |
|----------|---------------------------------------------------|-----------|
| `change` | Fired when `results` change (the list is sorted). | `results` |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name      | Description       | Type                  |
|-----------|-----------|-------------------|-----------------------|
| `default` | `results` | The searched list | Array<String, Object> |

### SpruceState

Create and manage localized state.

```html
<spruce-state :value="{ count: 0 }">
  <div slot-scope="{ count, set }">
    <button @click="set({count: count + 1})">
      Increment ({{ count }})
    </button>
  </div>
</spruce-state>
```

#### Props

| Name    | Description      | Type   | Required | Default |
|---------|------------------|--------|----------|---------|
| `value` | The state object | Object | Yes      |         |

#### Events

| Name    | Description              | Payload |
|---------|--------------------------|---------|
| `input` | Fired when state updates | `state` |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name            | Description                                | Type     |
|-----------|-----------------|--------------------------------------------|----------|
| `default` | `[key]`         | Each key in the `state` prop               | Any      |
| `default` | `set(newValue)` | Merges `newValue` with the current `state` | Function |

### SpruceToggle

Toggle between on (`true`) and off (`false`).

```html
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

#### Props

| Name    | Description             | Type    | Required | Default |
|---------|-------------------------|---------|----------|---------|
| `value` | The state of the toggle | Boolean | No       | `False` |

#### Events

| Name    | Description               | Payload |
|---------|---------------------------|---------|
| `input` | Fired when `isOn` updates | `isOn`  |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | Yes      |

#### Slot Scope

| Slot      | Name       | Description             | Type     |
|-----------|------------|-------------------------|----------|
| `default` | `isOn`     | The state of the toggle | Boolean  |
| `default` | `on()`     | Sets `isOn` to `true`   | Function |
| `default` | `off()`    | Sets `isOn` to `false`  | Function |
| `default` | `toggle()` | Toggles `isOn`          | Function |

### SpruceWatch

Watches variables for changes and emits events when changes occur.

```html
<spruce-watch :watch="{count}" @changed="handleAnyChange" @changed:count="handleCountChange">
  <button @click="count++">
    count++ ({{ count }})
  </button>
</spruce-watch>
```

#### Props

| Name    | Description              | Type   | Required | Default |
|---------|--------------------------|--------|----------|---------|
| `watch` | Values you wish to watch | Object | Yes      |         |

#### Events

| Name            | Description                                    | Payload                                  |
|-----------------|------------------------------------------------|------------------------------------------|
| `changed`       | Fired when any value in `watch` changes        | `{key: count, oldValue: 0, newValue: 1}` |
| `changed:[key]` | Fired when a specific value in `watch` changes | `{oldValue: 0, newValue: 1}`             |

#### Slots

| Name      | Required |
|-----------|----------|
| `default` | No       |

## Examples

See the [demo source code](src/demo/components) for real-world examples. Check out the [demo](https://vue-spruce.netlify.app/) to see the components in action with code examples.

## Development

### Lint

```bash
yarn lint
```

### Test

```bash
yarn test:unit
```

### Build Dist

```bash
yarn build
```

### Run Demo

```bash
yarn serve
```

### Build Demo

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
