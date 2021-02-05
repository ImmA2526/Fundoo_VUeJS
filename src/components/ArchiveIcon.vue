<template>
  <div id="archive">
    <md-icon @click.native="archiveNote(note)">archive</md-icon>

    <md-snackbar :md-position="position" :md-active.sync="isArchived" md-persistent v-if="noteType == 'Display'">
      <span>Note Archived!</span>
      <md-button class="md-primary" @click="isArchived = false">Ok</md-button>
    </md-snackbar>

    <md-snackbar :md-position="position" :md-active.sync="isArchived" md-persistent v-if="noteType == 'Archived'">
      <span>Note Unarchived!</span>
      <md-button class="md-primary" @click="isArchived = false">Ok</md-button>
    </md-snackbar>

    <md-snackbar :md-position="position" :md-active.sync="isError" md-persistent>
      <span>Error Occured!</span>
      <md-button class="md-primary" @click="isError = false">Ok</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import noteService from "../Services/noteService";

export default {
  name: "ArchiveIcon",
  props: {
    note: Object,
    noteType: String
  },
  data() {
    return {
      isArchived: false,
      isError: false,
      position: "left"
    };
  },
  methods: {
    archiveNote(note) {
      let archiveData = {
        isArchived: !note.isArchived,
        noteIdList: [note.id]
      };
      noteService
        .archiveNote(archiveData)
        .then(data => {
        //   if (result.status = "200") {
            console.log(data);
            this.$emit("fetchNotes");
            this.isArchived = true;
          }
        // }
        )
        .catch((error) =>{
          this.isError = true;
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.md-icon {
  cursor: pointer;
}
</style>
