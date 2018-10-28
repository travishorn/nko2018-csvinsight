<template>
  <div>
    <h2>3. Visualize!</h2>

    <ColumnChart />
  </div>
</template>

<script>
import ColumnChart from './ColumnChart.vue';

export default {
  name: 'PlotData',
  components: {
    ColumnChart,
  },
};
</script>
