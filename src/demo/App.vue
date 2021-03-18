<template>
  <div class="demos">
    <crud />

    <event />

    <function />

    <paginate />

    <search />

    <sort />

    <state />

    <toggle />
  </div>
</template>

<script>
import Crud from './components/Crud.vue';
import Event from './components/Event.vue';
import Function from './components/Function.vue';
import Paginate from './components/Paginate.vue';
import Search from './components/Search.vue';
import Sort from './components/Sort.vue';
import State from './components/State.vue';
import Toggle from './components/Toggle.vue';

export default {
  components: { Crud, Event, Function, Paginate, Toggle, Sort, State, Search },
};
</script>

<style>
body,
html {
  font-size: 14px;
}
</style>
