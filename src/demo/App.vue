<template>
  <div>
    <event />

    <search />

    <sort />

    <toggle />
  </div>
</template>

<script>
import Event from './components/Event.vue';
import Search from './components/Search.vue';
import Sort from './components/Sort.vue';
import Toggle from './components/Toggle.vue';

export default {
  components: { Event, Toggle, Sort, Search },
};
</script>

<style>
pre[class*='language-'] {
  margin-top: 0;
  height: 30rem;
  width: 100%;
}
</style>
