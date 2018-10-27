<template>
  <div class="form-group">
    <label :for="`${axis}Axis`">{{ axis | firstCap }} axis</label>
    <select :id="`${axis}Axis`" class="form-control">
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
};
</script>
