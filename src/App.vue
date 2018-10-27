<template>
  <div class="container my-3 my-md-5">
    <h1>
      <img src="./assets/logo.png" alt="CSV">
      Insight
    </h1>
    <FileSelector />
    <p>To do: configuration</p>
    <p>To do: charts</p>

    <KnockoutVote />
  </div>
</template>

<script>
import FileSelector from './components/FileSelector.vue';
import KnockoutVote from './components/KnockoutVote.vue';

export default {
  name: 'App',
  components: {
    KnockoutVote,
    FileSelector,
  },
};
</script>
