<template>
  <div>
    <h2>Select file</h2>
    <input type="file" accept=".csv" @input="fileChange">
    <SampleData />
  </div>
</template>

<script>
import SampleData from './SampleData.vue';

export default {
  name: 'FileSelector',
  methods: {
    fileChange(e) {
      this.$store.dispatch('changeFile', e.target.files[0]);
    },
  },
  components: {
    SampleData,
  },
};
</script>
