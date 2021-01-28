<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
          <div class="hamburger pull-left" v-on:click="switchDrawerMode">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>

        <!-- <label class="title title-name"> Vue </label>
        <label class="title title-app"> Keep </label> -->

      </div>
    </div>
  </nav>
</template>

<script>
// import Keep from "./Keep.vue";
export default {
  // components: {Keep},
  name: 'navbar',
  methods: {
    switchDrawerMode: function () {
      this.$store.commit('changeMode', 'drawer');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    border-radius: 0px !important;
    height: 64px;
    background-color: rgb(255, 187, 0);
    border-style: none;
    color: #3a3a3a;
    box-shadow: 1px 1px 5px gray;
  }
  .hamburger{
    width: 50px;
    height: 50px;
    margin-top: 7px;
    border-radius: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;
  }
  .hamburger:hover{
    background-color: #EDAE00;
  }
  .title{
    font-size: 20px;
    font-weight: normal;
    margin-top: 20px;
    cursor: pointer;
  }
  .title-name{
    font-weight: bold;
  }
</style>