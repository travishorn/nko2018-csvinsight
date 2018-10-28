<template>
  <div class="container my-3 my-md-5">
    <h1 class="">
      <img src="./assets/logo.png" alt="CSV">
      Insight
    </h1>

    <p class="lead mb-md-5">Quickly visualize comma-separated data.</p>

    <FileSelector class="mb-3 mb-md-5" />

    <DefineData v-if="dataExists" class="mb-3 mb-md-5" />

    <PlotData v-if="dataDefined" />

    <KnockoutVote />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import FileSelector from './components/FileSelector.vue';
import DefineData from './components/DefineData.vue';
import PlotData from './components/PlotData.vue';
import KnockoutVote from './components/KnockoutVote.vue';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'chartData',
      'axes',
    ]),
    dataExists() { return this.chartData.length; },
    dataDefined() { return this.axes.y && this.axes.x; },
  },
  components: {
    FileSelector,
    DefineData,
    PlotData,
    KnockoutVote,
  },
};
</script>

<style>
  body {
    font-family: Lato, sans-serif;
    background-color: #F4F4F4;
    color: #3D3D3B;
  }
</style>
