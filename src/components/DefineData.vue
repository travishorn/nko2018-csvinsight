<template>
  <div>
    <h2>Define data</h2>

    <div class="row">
      <div class="col-md-6">
        <DefineAxis axis="x" />
      </div>
      <div class="col-md-6">
        <DefineAxis axis="y" />
      </div>
    </div>
  </div>
</template>

<script>
import DefineAxis from './DefineAxis.vue';

export default {
  name: 'DefineData',
  components: {
    DefineAxis,
  },
};
</script>
