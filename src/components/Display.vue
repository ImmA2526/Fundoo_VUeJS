<template>
  <div>
    <!-- <md-card> -->
      <!-- <md-card-content> -->
          <div class="display" v-for="note in notes " :key="note._id">
<div class="addNote">
<div class="notes1">
            <div class="note pds">
              <b>{{ note.title }}</b>
            </div>
            <div class="note pds">
              {{ note.description }}
            </div>
            <div class="icon">
             <md-icon id="delete">delete</md-icon>
              <md-icon id="edit">edit</md-icon>
            </div>
<!-- <md-icon>trash</md-icon> -->
</div>
          </div>
          </div>

          
          <!-- this is the card body -->
    
      <!-- </md-card-content> -->
    <!-- </md-card> -->
    <!-- </md-ripple> -->
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 260px;
  margin: 4px;
  height: 180px;
  display: inline-block;
  vertical-align: top;
  border-radius: 12px;
}



.display {
    display: flex;
    width: 240px;
    overflow-wrap: break-word;
    content: "";
    display: table;
    clear: both;
       margin: -16px -4px;
    // margin: 0 -5px;
    display: inline-flex;
    white-space: normal;
    margin-left: 1%;
    margin-top: 3%;
    
    /* margin-right: 5%; */
    
}

#edit{
  cursor: pointer;
  margin-left: 20px;
}
#delete{
cursor: pointer;
height: 2px;
margin-left: 140px;
}

.display-note{
   
    margin-bottom: 100%;
    /* width: 25%; */
  padding: 0 10px;
  display: inline-flex;
  width: 220px;
  margin-left: 10%;
  margin-right: 20%;
}
.addNote {
    width: 240px;
    height:max-content;
    margin: 5px;
    border: 1px solid #dadce0;
    border-radius: 8px;
        box-sizing: content-box;
}

.notes1 {
    height:fit-content;
    overflow:content;
}

.pds {
    letter-spacing: .00625em;
    padding: 5px;
    height:fit-content;
    /* padding: 16px; */
}


// @media screen and (max-width: 600px) {
//     .display {
//         width:90%;
//     }

//     .addNote {
//         width: 90%;
//     }
// }

</style>

<script>
import noteService from "../Services/noteService";
export default {
  components: {
    // Display,
    // icons,

  },

  data: () => ({
    notes:[],
  }),
  methods: {
    close() {
      this.open = false;
    },

///Get all notes
  x: function () {
    noteService
      .getNotes()
      .then((response) => {
        console.log(response.data.data.data);
        this.notes = response.data.data.data;
        // this.notes.map(function(title,description){

        // })
      })
      .catch((error) => {
        console.log(error);
      });
  },


  },

  //Get Note Function

  
created() {
    this.x();
  },


  mounted() {
    this.x();
  },

  //  display() {
  //       const userData = {
  //         title: this.title,
  //         description: this.description,
  //       };
  //       noteService
  //         .getNotes(userData)
  //         .then(function (data) {

  //           localStorage.getItem("AccessToken");

  //           // Headers .........................
  //  headers: {
  //             Authorization: localStorage.getItem("AccessToken");
  //           }
  //  setTimeout(()=>  this.$router.push("/home"), 2000)
  // this.$router.push("/home");

  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // get: function () {
  //   this.$http
  //     .get(
  //       "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
  //       {
  //         title: this.title,
  //         description: this.description,
  //         cartId: "",
  //       }
  //     )
  //     .then(function (data) {
  //       this.$router.push("/display");
  //       console.log(data);
  //     })
  //     .catch();
  // },

  // 
};
</script>

