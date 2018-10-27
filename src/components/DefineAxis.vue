<template>
  <div class="form-group">
    <label :for="controlId">{{ axis | firstCap }} axis</label>
    <select :id="controlId" class="form-control">
      <option></option>
    </select>
  </div>
</template>

<script>
import firstCap from '../filters/firstCap.js';

export default {
  name: 'DefineAxis',
  props: ['axis'],
  filters: {
    firstCap,
  },
  computed: {
    controlId() {
      return `${this.axis}Axis`;
    },
  },
};
</script>
