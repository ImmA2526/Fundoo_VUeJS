<template>
  <div class="notes">
    <div class="createNote">
      <Create @getNotesEvent="fetchNotes"></Create>
    </div>
    <div id="empty" v-if="isListEmpty">
      <Spinner id="custom-spinner" v-if="notesLoadding" />
    </div>
    <div class="display note">
      <Display v-bind:allNotes="notes"></Display>
    </div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import noteService from "../Services/noteService";
import Create from "../components/Create";
import Display from "../components/Display";

export default {
  data() {
    return {
      notes: [],
      allNotes: [],
      isListEmpty: true,
      notesLoadding: false,
      // fetchNotes: [],
      //  getNotes:[]
    };
  },

  components: {
    Create,
    Display,
    Spinner,
  },

  methods: {
    //Get Note Function
    getAllNotes: function () {
      this.notesLoadding = true;
      noteService
        .getNotes()
        .then((response) => {
          console.log(response.data.data.data);
          this.notes = response.data.data.data;
          this.notesLoadding = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }, // Get All note Function

// Fetch notes Emit
    fetchNotes:function() {
      this.getAllNotes();
    },

  }, // Method

  mounted() {
    this.getAllNotes();
  },
}; // }Export MAin
</script>