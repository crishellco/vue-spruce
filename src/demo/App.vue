<template>
  <div class="p-4">
    <h3 class="text-2xl font-bold mb-4">
      Renderless Event
    </h3>
    <event />

    <h3 class="text-2xl font-bold mt-6 mb-4">
      Renderless Search
    </h3>
    <search />

    <h3 class="text-2xl font-bold mt-6 mb-4">
      Renderless Sort
    </h3>
    <sort />

    <h3 class="text-2xl font-bold mt-6 mb-4">
      Renderless Toggle
    </h3>
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
