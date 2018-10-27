<template>
  <div class="container my-3 my-md-5">
    <h1>
      <img src="./assets/logo.png" alt="CSV">
      Insight
    </h1>
    <p>To do: file selector</p>
    <p>To do: configuration</p>
    <p>To do: charts</p>

    <KnockoutVote />
  </div>
</template>

<script>
import KnockoutVote from './components/KnockoutVote.vue';

export default {
  name: 'App',
  components: {
    KnockoutVote,
  },
};
</script>
