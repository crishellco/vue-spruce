<template>
  <div class="p-4">
    <h3 class="text-2xl font-bold">
      Renderless Event
    </h3>
    <event />

    <h3 class="text-2xl font-bold mt-6">
      Renderless Search
    </h3>
    <search />

    <h3 class="text-2xl font-bold mt-6">
      Renderless Sort
    </h3>
    <sort />

    <h3 class="text-2xl font-bold mt-6">
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
