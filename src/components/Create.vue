<template>
<div id="add-note-container">
        <!-- 1st Note  -->
  <div v-if="open == false" @click="toggle" class="createnote">
        <!-- <div> -->
    <md-card id="card" md-with-hover>
        <div class="note">
            <input type="text" id="titles" v-model="title" placeholder="Take Note...." class="input1" />
            <md-icon id="list_Notes">notes</md-icon>
            <!-- <md-tooltip id="list_Notes1" md-direction="bottom">List All list_Notes</md-tooltip> -->
            <md-icon id="brush">brush</md-icon>
            <md-icon id="Notes_Image">image</md-icon>
        </div>
    </md-card>
  </div>

  <!-- Create Note 2  -->
  <!-- <div> -->
    <div v-else @on:click="toggle" class="createnote" >
      <md-card id="card1" v-bind:style="{ background: this.color }" md-with-hover >
          <div class="note1">
              <input v-bind:style="{ background: this.color }" type="text" class="text1" id="title" placeholder="Take Note..."  v-model="title"/>
              <textarea v-bind:style="{ background: this.color }" type="text" class="text" id="desc"  placeholder="Decscription...."  v-model="description" @input="mixin_autoResize_resize"></textarea>
          </div>

      <md-card-actions>
        <div id="icons1">
              <md-icon id="reminder">notifications_active</md-icon>
              <md-icon id="color" @click.native="paletteClicked = !paletteClicked">palette</md-icon>
              <div v-if="paletteClicked" class="palette-content">
                <div v-for="color in colors" :key="color.index" @click="setColor(color.value)" 
                    class="circle" v-bind:style="{ background: color.value }">
                </div>
              </div>
            <!-- <md-icon id="archive">archive</md-icon> -->
             <!-- <md-button class="md-icon-button" -->
             <md-icon @click.native="archiveNote()">archive</md-icon>
             <!-- </md-button> -->
            <!-- <md-icon id="delete" @click.native="clearData()">delete</md-icon> -->
      
        </div>
 <div class="btn">
              <button id="btn" type="button"  class="close" v-on:click=" close(); CreateNote(); " method="POST">Close</button>
        </div>
       
      </md-card-actions>
    </md-card>
  </div>
</div><!-- MAin Div -->
</template>


<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

#card {
  height: 50px;
  width: 600px;
  border-radius: 10px;
}

// Notes 1
#list_Notes {
  margin-right: 20px;
  padding-bottom: 8px;
  margin-left: 20px;
  color:black;
}

#brush {
  padding-right: 22px;
  padding-bottom: 8px;
  color:black;
}

#Notes_Image {
  margin-right: 20px;
  padding-bottom: 8px;
  color:black;
}
.note {
  border-radius: 10px;
}

// Content NAme
#brush1 {
  padding-right: 180px;
  color:black;
}

#list_Notes1 {
  margin-right: 200px;
}

#Notes_Image1 {
}

// Input Field
.input1 {
  padding-top: 10px;
  margin-top: 4px;
  border: none;
  height: 40px;
  border-radius: 10px;
  outline: none;
  width: 380px;
}

// Create 2 notes

#reminder {
  color: rgb(12, 12, 12);
  margin-left: 20px;
}
#color {
  color:black;
  margin-left: 20px;
}
#delete
{
 color:black;
  margin-left: 20px;
}

#archive {
  color: rgb(19, 2, 2);
  margin-left: 20px;
}

#icons1 {
  margin-right: 280px;
  padding-bottom: 30px;
}

#reminder1 {
}

#color1 {
}

#archive1 {
}

// Card 2
#card1 {
  height: 150px;
  width: 600px;
  border-radius: 10px;
}

#edit {
  color: cornflowerblue;
}

.btn ,#btn {
  // padding-top: 20px;
  padding-bottom:16px;
border: none;
background: none;
cursor:pointer;
font-size: 16px;
color:black;

}

// 2 notes
.text {
  padding-top: 8px;
  border: none;
  margin-top: 8px;
  // align-content: center;
  width: 390px;
  margin-right: 126px;
  outline: none;
  
}

.text1 {
  height: 40px;
  margin-right: 126px;
  width: 390px;
  margin-top: 8px;
  border: none;
  outline: none;
}

// Color Pallet 
.circle {
height: 25px;
width: 25px;
background-color: #bbb;
border-radius: 50%;
display: inline-block;
border: solid rgba($color: gray, $alpha: 0.4) 1px;
}
.palette-content {
display: grid;
grid-template-columns: auto auto auto;
row-gap: 1vh;
column-gap: 1vw;
padding: 1vh;
position: absolute;
bottom: 8vh;
left: 8vw;
background-color: white;
box-shadow: 0px 0px 5px 2px rgba($color: gray, $alpha: 0.4);
border-radius: 5px;

}

</style>

<script>
import mixinAutoResize from "../autoResize.js";
    import noteService from "../Services/noteService"
    
    export default {
    mixins: [mixinAutoResize],
    data() {
    return {
    open: false,
    title: null,
    description: null,
    isArchived: false,
    labelledList: [],
    position: "left",
    paletteClicked: false,
    // fetchNotes:false,
    color: "",
    colors: [
    { name: "white", value: "#ffffff" },
    { name: "red", value: "#f28b82" },
    { name: "orange", value: "#fbbc04" },
    { name: "green", value: "#ccff90" },
    { name: "purple", value: "#d7aefb" },
    { name: "teal", value: "#a7ffeb" },
    { name: "AliceBlue", value:"#F0F8FF"},
    { name: "Beige", value: "#F5F5DC" },
    { name: "BurlyWood", value:"#DEB887"}

    ]
    };
  },

    methods: {
    
    toggle() {
    this.open = !this.open;
    },

    close() {
    this.open = false;
    this.paletteClicked=false;
    // this.clearData();
    this.color = "#ffffff";
    
    },

    CreateNote() {
      if (this.title == null || this.description == null) {
        // this.AddNoteClicked();
        this.clearData();
        return;
      }
    const userData = {
    title: this.title,
    description: this.description,
    };
    noteService
    .createNote(userData)
    .then((data)=> {
    localStorage.getItem("AccessToken");
    //  setTimeout(()=>  this.$router.push("/"), 2000)
    console.log(data);
    this.$emit('getNotesEvent');

    }).catch((error) => {
    console.log(error);
    });
    },

    clearData() {
    this.title = null;
    this.description = null;
    this.color = "#ffffff";
    this.isArchived=false;
    },

    setColor(color) {
    this.color = color;
    this.paletteClicked = false;
    },

    archiveNote() {
    this.isArchived = !this.isArchived;
    },

    // getNotesEvent() {
    //   console.warn("Calling");
    //   this.$emit('getNotes',this.fetchNotes);
    // }

  },  // Method

    

};

</script>