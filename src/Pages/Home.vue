<template>
  <div class="page-container">
  <Nav></Nav>
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Keep</span>

<md-icon id="search">search</md-icon>
      <input type="text" class="textbox" placeholder="Search" />
      <div class="Icons">
        <md-icon id="refresh">refresh</md-icon>
        <md-icon id="listview">view_stream</md-icon>
        <md-icon id="setting">settings</md-icon>
        <md-icon id="apps1" class="material-icons">apps</md-icon>
      </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar> -->
<div class="md-overlay"></div>

        <md-list>
          <md-list-item>
           <md-icon id="notes">notes</md-icon>
            <span id="notes" class="md-list-item-text">Notes</span>
          </md-list-item>

          <md-list-item>
           <md-icon id="reminder">notifications</md-icon>
            <span id="reminder" class="md-list-item-text">Reminders</span>
          </md-list-item>

          <md-list-item>
<md-icon id="archive">archive</md-icon>
            <span id="archive" class="md-list-item-text">Archive</span>          </md-list-item>

          <md-list-item>
          <md-icon id="delete">delete</md-icon>
            <span id="delete" class="md-list-item-text">Trash</span>
            </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>

      <Create></Create>      
        <Display></Display>  
        
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
  min-height: 350px;
  // border: 1px solid rgba(#000, .12);
}
  .md-drawer {
  width: 180px;
 
  height: 710px;
    margin-top: 64px;

}

.md-content {
  height: 650px;
  color: black;
}


  .md-overlay {
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // z-index: 5;
    // overflow: hidden;
    /* background: rgba(0,0,0,.6); */
    // transition: .35s cubic-bezier(.4,0,.2,1);
    transition-property: opacity;
    will-change: opacity;
}

// Navabar Style 

.textbox {
  width: 520px;
  border-radius: 12px;
  height: 36px;
  margin-top: 4px;
}

.text {
  margin-left: 40px;
}
#search {
  margin-left: 24px;
  color: black;
}
#listview {
  margin-left: 24px;
}
#setting {
  margin-left: 24px;
  color: black;
}
#apps1 {
  margin-left: 110px;
  color: black;
}

.title {
  font-size: 20px;
  font-weight: normal;
  margin-top: 20px;
  cursor: pointer;
}
.title-name {
  font-weight: bold;
  margin-right: 200px;
}
#refresh {
  margin-left: 24px;
  color: black;
}
.Icons {
  display: inline;
  margin-left: 200px;

  // display: contents;
  // margin-left: 100px;
}



</style>

<script>
// Importing One Component To Another
// import Create from "../components/Create";
import Create from "../components/Create"
import Nav from "../components/NavBar"
import Display from '../components/Display.vue'
// import icons from "../components/icons"
export default {
  components: {
    Create,
    Nav,
    Display,
    // icons,
  },
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  }),

};
</script>
