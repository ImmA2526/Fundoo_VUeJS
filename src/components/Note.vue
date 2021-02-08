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
      <!-- <ArchiveIcon @ArchiveEvents="getArchive" /> -->
    </div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import noteService from "../Services/noteService";
import Create from "../components/Create";
import Display from "../components/Display";
// import ArchiveIcon from "../components/ArchiveIcon"
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
    // ArchiveIcon
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

    
// Archive List Function

archiveNotes:function() {
      this.notesLoadding = true;
      noteService
        .getArchivedNotes()
        .then((response) => {
          if (response.status == "200") {
            // this.notesLoadding = false;
          this.notes = response.data.data.data;
          this.notesLoadding = false;
            this.isNoteListEmpty = false;
          }
        })
        .catch(error => {
          this.isError = true;
           console.log(error);
        });
    },
 

 getArchive:function() {
      this.archiveNotes();
    },  


  }, // Method

// For All List 
  mounted() {
    this.getAllNotes();
  },

// For Archive List 

 created() {
    this.archiveNotes();
  },


}; // }Export MAin
</script>