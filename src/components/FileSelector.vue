<template>
  <div>
    <h2>Select file</h2>
    <input type="file" accept=".csv" @input="fileChange">
  </div>
</template>

<script>
export default {
  name: 'FileSelector',
  methods: {
    fileChange(e) {
      this.$store.dispatch('changeFile', e.target.files[0]);
    },
  },
};
</script>
