<template>
  <!-- Main -->
  <div>
    <div class="text">

    <!-- <div class="fundoo"> -->
              <!-- <div class="hamburger pull-left" v-on:click="switchDrawerMode">
              </div> -->
      <!-- <md-icon id="fun">emoji_objects</md-icon> -->
<!-- <img src="../assets/keep.png" alt="keep">    -->
   <!-- <label class="fundoo">Fundoo</label>       -->
    <!-- </div> -->
    <label class="title title-name"> Keep </label>
              <md-icon id="search">search</md-icon>
      <input type="text" class="textbox" placeholder="Search" />      
      <div class="Icons">
      <md-icon id="refresh">refresh</md-icon>
      <md-icon id="listview">view_stream</md-icon>
       <md-icon id="setting">settings</md-icon>
        <md-icon id ="apps1" class="material-icons">apps</md-icon>
    </div>
   

    </div>
    
  </div>
  <!-- Main -->
</template>

<style lang="scss" scoped>
.textbox
{
    width: 520px;
    border-radius: 12px;
    height: 36px;
    margin-top: 4px;
}

.text
{
      margin-left: 40px;
}
#search
{
    margin-left: 24px;
    color:black;
}
#listview
{
    margin-left: 24px;
}
#setting
{
    margin-left: 24px;
    color: black;
}
#apps1
{
        margin-left: 110px;
        color: black;
}

.title{
    font-size: 20px;
    font-weight: normal;
    margin-top: 20px;
    cursor: pointer;
  }
  .title-name{
    font-weight: bold;
    margin-right:200px;
  }
#refresh
{
    margin-left: 24px;
    color: black;
}
.Icons
{
      display: inline;
    margin-left: 200px;

// display: contents;
// margin-left: 100px;
}

.fundoo
    {
color:black;
display: inline;
    }
    #fun
    {
      color:black;
      height: 40px;
    }

</style>

<script>

// import icons from "../components/icons"
export default {
}
</script>