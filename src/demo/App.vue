<template>
  <div>
    <event />

    <function />

    <paginate />

    <search />

    <sort />

    <state />

    <toggle />

    <template src="./components/Event.vue" />
  </div>
</template>

<script>
import Event from './components/Event.vue';
import Function from './components/Function.vue';
import Paginate from './components/Paginate.vue';
import Search from './components/Search.vue';
import Sort from './components/Sort.vue';
import State from './components/State.vue';
import Toggle from './components/Toggle.vue';

export default {
  components: { Event, Function, Paginate, Toggle, Sort, State, Search },
};
</script>
