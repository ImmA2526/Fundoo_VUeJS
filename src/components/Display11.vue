<template>
  <div class='ui centered card'>
    <div class="content" v-show="!showEditForm">
      <div class='header'>
          {{ note.title }}
      </div>
      <div class='meta italic'>
          {{ note.description }}
      </div>
      <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteNote(note)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="showEditForm">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="note.title" >
        </div>
        <div class='field'>
          <label>Description</label>
          <input type='text' v-model="note.description" >
        </div>
        <div class='ui two buttons'>
          <button class='ui basic button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['note'],
    data() {
      return {
        showEditForm: false,
      };
    },
    methods: {
      deleteNote(note) {
        this.$emit('delete-note', note);
      },
      showForm() {
        this.showEditForm = true;
      },
      hideForm() {
        this.showEditForm = false;
      },
    },
  };
</script>

<style scoped>
  .italic {font-style: italic}
</style>
