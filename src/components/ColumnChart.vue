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
      margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
      xAxisG: null,
    };
  },
  computed: {
    ...mapGetters([
      'axes',
      'chartData',
    ]),
    chart() {
      return d3.select(this.$el);
    },
    x() {
      const data = this.chartData || [];

      return d3.scaleBand()
        .domain(data.map(d => d[this.axes.x]))
        .range([this.margin.left, this.width - this.margin.right])
        .padding(0.1);
    },
    y() {
      return d3.scaleLinear()
        .domain([0, d3.max(this.chartData, d => d[this.axes.y])]).nice()
        .range([this.height - this.margin.bottom, this.margin.top]);
    },
  },
  watch: {
    x() { this.xAxisG.call(this.xAxis); },
    y() { this.yAxisG.call(this.yAxis); },
  },
  methods: {
    xAxis(g) {
      return g
        .attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
        .call(d3.axisBottom(this.x)
          .tickSizeOuter(0));
    },
    yAxis(g) {
      return g
        .attr('transform', `translate(${this.margin.left}, 0)`)
        .call(d3.axisLeft(this.y));
    },
  },
  mounted() {
    this.xAxisG = this.chart.append('g').call(this.xAxis);
    this.yAxisG = this.chart.append('g').call(this.yAxis);
  },
};
</script>
