<template>
  <div class="demos">
    <event />
    <fetch />
    <function />
    <paginate />
    <search />
    <sort />
    <state />
    <toggle />
  </div>
</template>

<script>
import Event from './components/Event.vue';
import Fetch from './components/Fetch.vue';
import Function from './components/Function.vue';
import Paginate from './components/Paginate.vue';
import Search from './components/Search.vue';
import Sort from './components/Sort.vue';
import State from './components/State.vue';
import Toggle from './components/Toggle.vue';

export default {
  components: {
    Event,
    Fetch,
    Function,
    Paginate,
    Search,
    Sort,
    State,
    Toggle,
  },
};
</script>

<style>
body,
html {
  font-size: 14px;
}
</style>
