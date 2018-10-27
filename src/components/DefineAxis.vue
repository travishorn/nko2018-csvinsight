<template>
  <div class="form-group">
    <label :for="controlId">{{ axis | firstCap }} axis</label>
    <select :id="controlId" class="form-control" v-model="val">
      <option v-for="header in headers" :key="header">{{ header }}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import firstCap from '../filters/firstCap';

export default {
  name: 'DefineAxis',
  props: ['axis'],
  filters: {
    firstCap,
  },
  computed: {
    ...mapGetters([
      'headers',
    ]),
    val: {
      get() { return this.$store.getters.axes[this.axis]; },
      set(value) {
        this.$store.dispatch('changeAxis', {
          key: this.axis,
          value,
        });
      }
    },
    controlId() { return `${this.axis}Axis`; },
  },
};
</script>
