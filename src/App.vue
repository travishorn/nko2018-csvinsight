<template>
  <div class="container my-3 my-md-5">
    <h1 class="mb-3 mb-md-5">
      <img src="./assets/logo.png" alt="CSV">
      Insight
    </h1>

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
