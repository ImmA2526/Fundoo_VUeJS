<template>
  <div class="main">
    <!-- Functionality Pending  -->
<!-- 1st Note  -->
    <!-- <div v-if="open == false" @click="toggle" class="createnote"> -->
<div>
      <md-card id="card">
        <div class="note">
          <textarea type="text" placeholder="Take Note...." class="input1" />
        
          <md-icon id="list_Notes">notes</md-icon>
            <md-tooltip id="list_Notes1" md-direction="bottom">List All list_Notes</md-tooltip>
            <md-icon id="brush">brush</md-icon>
            <md-tooltip id="brush1" md-direction="bottom">Note with Drawing</md-tooltip>
            <md-icon id="Notes_Image">image</md-icon>
            <md-tooltip  id="Notes_Image1" md-direction="bottom">Note with Image</md-tooltip>
          
        </div>

        <md-card-actions>
          <div class="icons">
           
            
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
          <textarea type="text" placeholder="Take Note...." class="text" />
        </div>

        <md-card-actions>
          <div class="icons">
            <md-icon id="reminder">notifications_active</md-icon>
            <md-tooltip md-direction="bottom">Reminde Me</md-tooltip>
          
            <md-icon id="color">color_lens</md-icon>
            <md-tooltip md-direction="bottom">Select Color</md-tooltip>
            <md-icon id="archive">archive</md-icon>
            <md-tooltip md-direction="bottom">Archive</md-tooltip>
           
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
    padding-right: 22px;
     padding-bottom: 28px;
}

#list_Notes
{
 margin-right: 20px; 
  color:orange; 
  padding-bottom: 28px;
}

#Notes_Image
{
  margin-right: 20px; 
  padding-bottom: 28px;
}
// Content NAme
#brush1
{
    padding-right: 180px;
}
#list_Notes1
{
 margin-right: 200px;

}
#Notes_Image1
{
  
}

// Input Field
.input1
{
  padding-top:10px ;
  margin-top: 20px;
  // border:none;
  height:40px;
  
  width: 380px;
}

 .text
{
  padding-top:20px ;
  // border:none;
margin-top: 50px;
  // align-content: center;
  width: 400px;
}
</style>

<script>
export default {};
</script>