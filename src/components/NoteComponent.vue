<template>
  <div class="notes">
    <div class="createNote">
      <Create></Create>
    </div>
    <div class="display note">
    <!-- <div class="displayNote" v-for="note in notes" :key="note._id"> -->
    {{ Create }}
    {{ Display }}

      <Display v-bind:getAllnotes="getAllnotes"></Display>
    </div>
  </div>
</template>

<script>
// import {Http} from "../Services/Http"
import noteService from "../Services/noteService"
import Create from"../components/Create"
import Display from "../components/Display"


export default {
    name:'Display',
    props:[
        Display,
        Create
    ],

    data (){
        return{
getAllnotes: []
        };
    },

    components:{
        Create,
        // Display,
    },

methods:{

    //Get Note Function

x: function () {
      noteService
        .getNotes()
        .then((response) => {
          console.log(response.data.data.data);
          this.notes = response.data.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  
  mounted() {
    this.x();
  },

}; // }Export MAin

</script>