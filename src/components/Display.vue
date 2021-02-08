<template>
  <div id="display-note-container">    
    <div id="display" class="card" v-for="note in allNotes" :key="note._id">
      <div class="addNote">
        <div class="notes1">
          <div class="note pds">
            <b>{{ note.title }}</b>
          </div>
          <div class="note pds">
            {{ note.description }}
          </div>
        <div class="cardActions">
          <ColorIcon id="color" v-bind:note="note" @fetchNotes="fetchNotes()" />
          <ArchiveIcon id="archive" v-bind:note="note" noteType="Display" @fetchNotes="fetchNotes()"/>
        </div>
          </div>
      </div>
    </div>  
</div> 

</template>

<script>
import ArchiveIcon from "../components/ArchiveIcon";
import ColorIcon from "../components/Color";

export default {
  name: "DisplayNotes",
  components: {
    ArchiveIcon,
    ColorIcon,
  },

    props:[
       'allNotes'
    ],

      data() {
    return {
      isCardAction: false,
      isListEmpty: true,
      notes: [],
      title: null,
      description: null,
      color: "#FFFFFF",
      isArchived: false,
      labelledList: [],
      notesLoadding: false,
      showDialog: false,
      };
  },

  methods: {
    close() {
      this.open = false;
    },
  },
};

</script>

<style lang="scss" scoped>

#display {
  display: flex;
  width: 240px;
  overflow-wrap: break-word;
  content: "";
  display: table;
  clear: both;
  margin: -16px -4px;
  display: inline-flex;
  white-space: normal;
  margin-left: 1%;
  margin-top: 3%;
}

#archive , #color
{
  color:black;
}
.addNote {
  width: 240px;
  height: max-content;
  margin: 5px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-sizing: content-box;
}

.notes1 {
  height: fit-content;
  overflow: content;
}

// Spacing between word and line
.pds {
  letter-spacing: 0.00625em;
  padding: 5px;
  height: fit-content;
}

// New Card With Icon 
.card {
  position: relative;
  box-shadow: 0px 0px 5px 1px rgba($color: gray, $alpha: 0.4);
  border-radius: 5px;
  height: fit-content;
  width: fit-content;
  overflow-wrap: break-word;
  border: 1px solid white; 
}

.card:hover {
  border: 1px solid rgba($color: gray, $alpha: 0.8);
  .cardActions {
    opacity: 100%;
  }
}

// Icons 
.cardActions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1vw;
  padding-bottom: 1vh;
  opacity: 0%;
  color:black;
}


#display-note-container {
  width: 65vw;
  left: 10vw;
  position: relative;
  top: 2vh;  
  color:black;
}

</style>

  



