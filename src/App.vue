<template>
  <div class="container my-3 my-md-5">
    <h1>
      <img src="./assets/logo.png" alt="CSV">
      Insight
    </h1>
    <FileSelector />
    <DefineData />
    <PlotData />

    <KnockoutVote />
  </div>
</template>

<script>
import FileSelector from './components/FileSelector.vue';
import DefineData from './components/DefineData.vue';
import PlotData from './components/PlotData.vue';
import KnockoutVote from './components/KnockoutVote.vue';

export default {
  name: 'App',
  components: {
    FileSelector,
    DefineData,
    PlotData,
    KnockoutVote,
  },
};
</script>
