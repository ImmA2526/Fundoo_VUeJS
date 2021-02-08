<template>
  <div id="archived-container">
    <div id="note-list" v-if="!isNoteListEmpty">
      <!-- <div v-bind:style="{ background: note.color }" class="card" v-for="note in filteredNotes.slice().reverse()" :key="note.index" > -->
<!-- <div class="Archive note">
</div>     -->
        <div class="cardActions">
          <ArchiveIcon id="archive" v-bind:note="note" noteType="Archived" @fetchNotes="fetchNotes()"/>
        </div>
      <!-- </div> -->
    </div>
<!-- #archive , #color -->
    <md-snackbar :md-position="position" :md-active.sync="isError" md-persistent>
      <span>Error Occured!</span>
      <md-button class="md-primary" @click="isError = false">Ok</md-button>
    </md-snackbar>
     </div>
</template>

<script>
// import noteServices from "../Services/noteService";
// import Spinner from "vue-simple-spinner";
import ArchiveIcon from "./ArchiveIcon.vue";

export default {
  name: "notes",
  data() {
    return {
    //   notesLoadding: false,
      isNoteListEmpty: true,
      notes: [],
      isError: false,
      position: "left",
      showDialog: false,
    };
  },
  components: {
    // Spinner,
    ArchiveIcon,
  },
  

  methods: {
    
  },
  
  

};
</script>

<style lang="scss" scoped>
#archived-container {
  width: 65vw;
  left: 15vw;
  position: relative;
  top: 10vh;
  height: auto;
}
#empty {
  font-size: 40px;
  line-height: 40px;
  height: 50vh;
  padding-top: 22vh;
  opacity: 0.4;
  position: relative;
  left: 2vw;
  top: 10vh;
}
#custom-spinner {
  position: relative;
  top: -10vh;
}
#note-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 1vw;
  column-gap: 1vh;
}
.card {
  position: relative;
  box-shadow: 0px 0px 5px 1px rgba($color: gray, $alpha: 0.4);
  border-radius: 5px;
  height: fit-content;
  border: 1px solid white;
}
.card:hover {
  border: 1px solid rgba($color: gray, $alpha: 0.8);
  .cardActions {
    opacity: 100%;
  }
}
.md-title {
  font-size: 17px;
  text-align: left;
  color: black;
}
.md-card-content {
  text-align: left;
  opacity: 0.8;
  padding-bottom: 0px;
}
.md-icon {
  cursor: pointer;
}
#push-pin {
  position: absolute;
  top: 2vh;
  right: 1vw;
}
.cardActions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1vw;
  padding-bottom: 1vh;
  opacity: 0%;
}
</style>
