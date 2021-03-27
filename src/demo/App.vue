<template>
  <div class="demos">
    <cling />
    <event />
    <fetch />
    <function />
    <paginate />
    <search />
    <sort />
    <state />
    <toggle />
    <watch />
  </div>
</template>

<script>
import Cling from './components/Cling.vue';
import Event from './components/Event.vue';
import Fetch from './components/Fetch.vue';
import Function from './components/Function.vue';
import Paginate from './components/Paginate.vue';
import Search from './components/Search.vue';
import Sort from './components/Sort.vue';
import State from './components/State.vue';
import Toggle from './components/Toggle.vue';
import Watch from './components/Watch.vue';

export default {
  components: {
    Cling,
    Event,
    Fetch,
    Function,
    Paginate,
    Search,
    Sort,
    State,
    Toggle,
    Watch,
  },
};
</script>

<style>
body,
html {
  font-size: 14px;
}
</style>
