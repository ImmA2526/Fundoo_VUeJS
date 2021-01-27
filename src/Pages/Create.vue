<template>
  <div class="main">
    <!-- Functionality Pending  -->
<!-- 1st Note  -->
    <!-- <div v-if="open == false" @click="toggle" class="createnote"> -->
<div>
      <md-card id="card">
        <div class="note">
          <input type="text" placeholder="Take Note...." class="input1" />
        </div>

        <md-card-actions>
          <div class="icons">
           
            <md-icon id="list_Notes">notes</md-icon>
            <md-tooltip id="list_Notes1" md-direction="bottom">List All list_Notes</md-tooltip>
            <md-icon id="brush">brush</md-icon>
            <md-tooltip id="brush1" md-direction="bottom">Note with Drawing</md-tooltip>
            <md-icon id="Notes_Image">image</md-icon>
            <md-tooltip  id="Notes_Image1" md-direction="bottom">Note with Image</md-tooltip>
            
          </div>
          <md-button>Action</md-button>
          <md-button>Take</md-button>
        </md-card-actions>
      </md-card>
    </div>


    <!-- Create Note 2  -->
<div>
     <!-- <div v-if="open == false" @click="toggle" class="createnote"> -->
      <md-card id="card1">
        <div class="note">
          <input type="text" placeholder="Take Note...." class="input1" />
        </div>

        <md-card-actions>
          <div class="icons">
            <md-icon id="reminder">notifications</md-icon>
            <!-- <md-tooltip md-direction="bottom">Reminder</md-tooltip> -->
          
            <md-icon id="color">color_lens</md-icon>
            <!-- <md-tooltip md-direction="bottom"></md-tooltip> -->
            <md-icon id="archive">archive</md-icon>
            <!-- <md-tooltip md-direction="bottom">Archive</md-tooltip> -->
           
            </div>
          <md-button>Action</md-button>
          <md-button>Take</md-button>
        </md-card-actions>
      </md-card>
    </div>

  </div>
  <!-- main <div></div> -->
</template>
    

<style lang="scss" scoped>
// .icons {
//   display: flex;
//   justify-content: flex-end;
//   margin-inline: 200px;
// }

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

#card {
  height: 100px;
  width: 600px;
}

// Card 2
#card1 {
  height: 180px;
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

// Notes 1
#brush
{
    padding-right: 22px
}
#list_Notes
{
 margin-right: 20px; 
}
#Notes_Image
{
  
}

#brush1
{
    padding-right: 180px
}
#list_Notes1
{
 margin-right: 200px; 
}
#Notes_Image1
{
  
}

</style>

<script>
export default {};
</script>