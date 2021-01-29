<template>
  <div>
    <!-- <div class="keep-input"> -->
    <!-- 1st Note  -->
    <div v-if="open == false" @click="toggle" class="createnote">
      <!-- <div> -->
      <md-card id="card" md-with-hover>
        <div class="note">
          <input
            type="text"
            id="titles"
            v-model="title"
            placeholder="Take Note...."
            class="input1"
          />
          <md-icon id="list_Notes">notes</md-icon>
          <md-tooltip id="list_Notes1" md-direction="bottom"
            >List All list_Notes</md-tooltip
          >
          <md-icon id="brush">brush</md-icon>
          <md-tooltip id="brush1" md-direction="bottom"
            >Note with Drawing</md-tooltip
          >
          <md-icon id="Notes_Image">image</md-icon>
          <md-tooltip id="Notes_Image1" md-direction="bottom"
            >Note with Image</md-tooltip
          >
        </div>
      </md-card>
    </div>

    <!-- Create Note 2  -->
    <!-- <div> -->
    <div v-else @on:click="toggle" class="createnote">
      <md-card id="card1" md-with-hover>
        <div class="note1">
          <input
            type="text"
            class="text1"
            id="title"
            v-model="title"
            placeholder="Take Note...."
          />
          <input
            type="text"
            class="text"
            id="desc"
            v-model="description"
            placeholder="Decscription...."
          />
        </div>

        <md-card-actions>
          <div class="icons1">
            <md-icon id="reminder">notifications_active</md-icon>
            <md-tooltip id="reminder1" md-direction="bottom"
              >Reminde Me</md-tooltip
            >
            <md-icon id="color">color_lens</md-icon>
            <md-tooltip id="color1" md-direction="bottom"
              >Select Color</md-tooltip
            >
            <md-icon id="archive">archive</md-icon>
            <md-tooltip id="archive1" md-direction="bottom">Archive</md-tooltip>
          </div>

          <div class="btn">
            <md-button type="button" class="close" v-on:click=" close(); CreateNote();" method="POST">Close</md-button>
          </div>
          <!-- <Display></Display> -->
        </md-card-actions>
      </md-card>
    </div>
    <!-- </div> -->
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
  height: 50px;
  width: 600px;
  border-radius: 10px;
}

// Notes 1
#list_Notes {
  margin-right: 20px;
  color: orange;
  // padding-bottom: 28px;
  padding-bottom: 8px;
  margin-left: 20px;
}

#brush {
  padding-right: 22px;
  padding-bottom: 8px;
}

#Notes_Image {
  margin-right: 20px;
  padding-bottom: 8px;
}
.note {
  border-radius: 10px;
}
// Content NAme
#brush1 {
  padding-right: 180px;
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
  // padding-left: 30px;
  margin-left: 40px;
}
#color {
  color: rgb(214, 108, 9);
  // padding-left: 40px;
  margin-left: 40px;
}

#archive {
  color: rgb(19, 2, 2);
  // padding-left: 24px;

  margin-left: 40px;
  // margin-left: 0px;
}

.icons1 {
  margin-right: 280px;
}
#reminder1 {
}
#color1 {
}
#archive1 {
}

// Card 2
#card1 {
  height: 140px;
  width: 600px;
  border-radius: 10px;
}

#edit {
  color: cornflowerblue;
  // padding-left: 20px;
}

.btn {
  padding-top: 20px;
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
</style>

<script>
import noteService from "../Services/noteService"
// import Display from "../components/Display";
export default {
  components: {
    // Display,
    // icons,
  },
  data: () => ({
    open: false,
    title: null,
    description: null,
  }),
  methods: {
    close() {
      this.open = false;
    },

    toggle() {
      this.open = !this.open;
    },
    //Create Note Function

    CreateNote() {
      const userData = {
        title: this.title,
        description: this.description,
      };
      noteService
        .createNote(userData)
        .then(function (data) {
          
          localStorage.getItem("AccessToken");

//           // Headers .........................
//  headers: {
//             Authorization: localStorage.getItem("AccessToken");
//           }
          //  setTimeout(()=>  this.$router.push("/home"), 2000)
          // this.$router.push("/home");

          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // post:function(){
    //       this.$http.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',{
    //         title:this.title,
    //         description:this.description,
    //         // cartId:''

    //       },

    //        headers : {
    //     Authorization: localStorage.getItem('AccessToken')
    //   }
    //   ).then((data)=> {
    //         // this.$router.push("/display")
    //         console.log(data);
    //       }).catch((error)=>{
    //         console.log(error);
    //       });

    //     },
  },
};
</script>