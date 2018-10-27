<template>
  <svg :viewBox="`0 0 ${width} ${height}`"></svg>
</template>

<script>
import * as d3 from 'd3';
import { mapGetters } from 'vuex';

export default {
  name: 'ColumnChart',
  data() {
    return {
      width: 1000,
      height: 500,
    };
  },
  computed: {
    ...mapGetters([
      'axes',
    ]),
  },
  mounted() {
    const margin = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    };

    const chart = d3.select(this.$el);

    const x = d3.scaleBand()
      .domain(['One', 'Two', 'Three'])
      .range([margin.left, this.width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height - margin.bottom, margin.top]);

    const xAxis = g => g
      .attr('transform', `translate(0, ${this.height - margin.bottom})`)
      .call(d3.axisBottom(x)
        .tickSizeOuter(0));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select('.domain').remove());

    chart.append('g')
      .call(xAxis);

    chart.append('g')
      .call(yAxis);
  }
};
</script>
