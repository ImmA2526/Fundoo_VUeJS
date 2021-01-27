<template>

  <div  class="page-container">    
    <md-app id="tb">

      <md-app-toolbar id="tb"   class="md-primary" md-elevation="0">
        <md-button  class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon id="tb1" >keyboard_arrow_right</md-icon>
        </md-button>
       
              <md-tabs id="tb"  class="md-primary" md-alignment="centered">
      <md-tab  md-label="Home"></md-tab>
     <div class="log">
      <md-tab  to="./" md-alignment="right" md-label="Logout"></md-tab>
     </div>
     
    </md-tabs>
      </md-app-toolbar>

      <md-app-drawer id="tb"  :md-active.sync="menuVisible"   md-persistent="mini">
        
        <md-toolbar id="tb" class="md-transparent" md-elevation="0">
          <span id="mn">Navigation</span>

          <div  class="md-toolbar-section-end">
            <md-button  class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon id="mn">keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list id="tb">
          <md-list-item >
            <md-icon id="notes">notes</md-icon>
            <span id="notes" class="md-list-item-text">Notes</span>
          </md-list-item>

          <md-list-item>
            <md-icon id="reminder">alarm</md-icon>
            <span id="reminder" class="md-list-item-text">Reminders</span>
          </md-list-item>
<md-list-item>
            <md-icon id="archive">archive</md-icon>
            <span id="archive" class="md-list-item-text">Archive</span>
          </md-list-item>

          <md-list-item>
            <md-icon id="delete">delete</md-icon>
            <span id="delete" class="md-list-item-text">Trash</span>
          </md-list-item>
         
        </md-list>
      </md-app-drawer>

      <md-app-content>
<h2>Welcome To Fundoo Notes</h2>
  
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default 
  {
    name: 'PersistentMini',
    data: () => ({
      menuVisible: false
    }),

    
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
.md-app {
min-height: 350px;
// border: 1px solid rgba(#000, .12);
}
 #tb1
        {
          color:black
        }
// Demo purposes only
.md-drawer {
width: 230px;
// max-width: calc(100vw - 125px);
height: 700px;
}

.md-content
{
  height: 650px;
}
.log
{
margin-left: 500px;
}

// navigation
#tb
{
background-color:white;
}

#delete
{
color:black;
}

#archive
{
color:black;
}

#reminder
{
color:black;
}

#notes
{
color:black;
}

#mn
{color:black;}

</style>