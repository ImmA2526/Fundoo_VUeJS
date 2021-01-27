<template>
  <div class="Notes">
    <!-- <IconButton><CheckBoxOutlinedIcon /></IconButton> -->

    <md-card id="card" md-with-hover>
      <!-- <md-ripple>
        <md-card-header>
          <div class="md-title">Card with hover effect</div> -->
      <!-- <div class="md-subhead">It also have a ripple</div> -->
      <!-- </md-card-header> -->
      <div class="note">
        <textarea name="text" placeholder="Take Note...."></textarea>
      </div>

      <!-- <md-card-content>
         this is the card 
        </md-card-content> -->

      <md-card-actions>
        <div class="icons">
          <md-icon id="color">color-palette</md-icon>
          <md-icon id="edit">edit</md-icon>
          <md-icon id="archive">archive</md-icon>
          <md-icon id="reminder">alarm</md-icon>
        </div>
        <md-button>Action</md-button>
        <md-button>Take</md-button>
      </md-card-actions>
      <!-- </md-ripple> -->
    </md-card>
  </div>
</template>
    

<style lang="scss" scoped>
.icons {
  display: flex;
  justify-content: flex-end;
  margin-inline: 200px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

#card {
  height: 60px;
  width: 600px;
}
#edit {
  color: cornflowerblue;
  // padding-left: 20px;
}

#archive {
  color: rgb(19, 2, 2);
  // padding-left: 24px;
  // margin-left: 0px;
}

#reminder {
  color: rgb(12, 12, 12);
  // padding-left: 30px;
}
#color {
  color: rgb(214, 108, 9);
  // padding-left: 40px;
}
</style>

<script>
export default {};
</script>