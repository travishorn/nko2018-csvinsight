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
        top: 20,
        right: 0,
        bottom: 30,
        left: 80,
      },
      xAxisG: null,
      yAxisG: null,
      columns: null,
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
      const data = this.chartData || [];

      return d3.scaleLinear()
        .domain([0, d3.max(data, d => d[this.axes.y])]).nice()
        .range([this.height - this.margin.bottom, this.margin.top]);
    },
  },
  watch: {
    x() {
      if (this.axes.x) {
        this.xAxisG.call(this.xAxis);
        this.plotData();
      }
    },
    y() {
      if (this.axes.y) {
        this.yAxisG.call(this.yAxis);
        this.plotData();
      }
    },
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
        .call(d3.axisLeft(this.y))
        .call(currentG => currentG.select('.domain').remove());
    },
    plotData() {
      if (this.axes.x && this.axes.y) {
        const rect = this.columns.selectAll('rect').data(this.chartData);

        rect.exit().remove();

        rect.enter()
          .append('rect')
          .attr('x', d => this.x(d[this.axes.x]))
          .attr('y', d => this.y(d[this.axes.y]))
          .attr('height', d => this.y(0) - this.y(d[this.axes.y]))
          .attr('width', this.x.bandwidth());


        rect
          .attr('x', d => this.x(d[this.axes.x]))
          .attr('y', d => this.y(d[this.axes.y]))
          .attr('height', d => this.y(0) - this.y(d[this.axes.y]))
          .attr('width', this.x.bandwidth());
      }
    },
  },
  mounted() {
    this.xAxisG = this.chart.append('g').call(this.xAxis);
    this.yAxisG = this.chart.append('g').call(this.yAxis);
    this.columns = this.chart.append('g').attr('fill', '#C0392B');
    this.plotData();
  },
};
</script>
