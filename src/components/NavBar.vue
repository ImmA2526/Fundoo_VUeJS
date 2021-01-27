<template>
  <div>
  

    <!-- Right aligned -->
    <md-tabs class="md-accent" md-alignment="right">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>

  </div>
</template>

<script>
  export default {
    name: 'TabAlignments'
  }
</script>

<style lang="scss" scoped>
  .md-tabs {
    margin-bottom: 24px;
  }
</style>