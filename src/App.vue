<template>
  <div class="container my-3 my-md-5">
    <h1>
      <img src="./assets/logo.png" alt="CSV">
      Insight
    </h1>
    <HelloWorld msg="Welcome!" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
