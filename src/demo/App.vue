<template>
  <div>
    <h1>hello</h1>
    <h3>Renderless Event</h3>
    <renderless-state :value="{ count: 0 }">
      <renderless-event
        slot-scope="{ state, update }"
        event="click"
        @click="update({ count: state.count + 1 })"
      >
        <button>click me ({{ state.count }})</button>
      </renderless-event>
    </renderless-state>

    <renderless-state :value="{ count: 0 }">
      <renderless-event
        slot-scope="{ state, update }"
        event="click"
        outside
        @click="update({ count: state.count + 1 })"
      >
        <button>click outside me ({{ state.count }})</button>
      </renderless-event>
    </renderless-state>

    <h3>Renderless Toggle</h3>

    <renderless-toggle>
      <div slot-scope="{ isOn, toggle }">
        <button @click="toggle">
          toggle
        </button>
        <div>{{ isOn }}</div>
      </div>
    </renderless-toggle>
  </div>
</template>

<script>
import { RenderlessEvent, RenderlessState, RenderlessToggle } from '../components';

export default {
  components: { RenderlessEvent, RenderlessState, RenderlessToggle },
};
</script>

<style></style>
