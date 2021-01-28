<template>
  <!-- Main -->
  <div>
    <div class="text">
      <md-icon id="search">search</md-icon><input type="text" class="textbox" placeholder="Search" />
      
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
    height: 40px;
    margin-top: 20px;
}

.text
{
      margin-left: 80px;
}
#search
{
    margin-left: 24px;
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
#refresh
{
    margin-left: 24px;
    color: black;
}
.Icons
{
      display: inline;
    margin-left: 160px;

// display: contents;
// margin-left: 100px;
}

</style>