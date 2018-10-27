<template>
  <svg :viewBox="`0 0 ${width} ${height}`"></svg>
</template>

<script>
export default {
  name: 'ColumnChart',
  data() {
    return {
      width: 1000,
      height: 500,
    };
  },
};
</script>
