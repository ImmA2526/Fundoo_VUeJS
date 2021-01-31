<template>
  <div>
    <md-card>
      <md-card-content>
          <div class="display" v.for="note in notes" :key="note._id">
            <div class="header">
              {{ note.title }}
            </div>
            <div class="meta italic">
              {{ note.description }}
            </div>
          </div>
          <!-- this is the card body -->
    
      </md-card-content>
    </md-card>
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
</style>

<script>
import noteService from "../Services/noteService";
export default {
  components: {
    // Display,
    // icons,
  },
  methods: {
    close() {
      this.open = false;
    },
  },

  //Get Note Function

  ///Get all notes
  getAllNotes: function () {
    
    const userData = {
          title: this.title,
          description: this.description,
        };
    noteService
      .getNotes(userData)
      .then((response) => {
        console.log(response.data.result);
        this.notes = response.data.result;
        // this.notes.map(function(title,description){

        // })
      })
      .catch((error) => {
        console.log(error);
      });
  },

  crated() {
    this.getAllNotes();
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

  // data: () => ({
  //   title: null,
  //   description: null,
  // }),
};
</script>

