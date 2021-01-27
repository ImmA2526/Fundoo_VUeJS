<template>
<div>
 <div class="keep-input">   <!-- 1st Note  -->
    <div v-if="keepInputMode" class="createnote">
    <!-- <div> -->
      <md-card id="card">
        <div class="note">
          <textarea type="text" placeholder="Take Note...." class="input1" />
          
          <md-icon id="list_Notes">notes</md-icon>
          <md-tooltip id="list_Notes1" md-direction="bottom">List All list_Notes</md-tooltip>
          <md-icon id="brush">brush</md-icon>
          <md-tooltip id="brush1" md-direction="bottom">Note with Drawing</md-tooltip>
          <md-icon id="Notes_Image">image</md-icon>
          <md-tooltip id="Notes_Image1" md-direction="bottom">Note with Image</md-tooltip>
        </div>
      </md-card>
    </div>

    <!-- Create Note 2  -->
    <!-- <div> -->
      <!-- <div v-if="open == false" @click="toggle" class="createnote">
      <md-card id="card1">
        <div class="note">
        <input type=text class="text" value="Title"/>
          <textarea type="text" placeholder="Take Note...." class="text" />
        </div>

        <md-card-actions>
          <div class="icons1">
            <md-icon id="reminder">notifications_active</md-icon>
            <md-tooltip id="reminder1" md-direction="bottom">Reminde Me</md-tooltip>
            <md-icon id="color">color_lens</md-icon>
            <md-tooltip id="color1" md-direction="bottom">Select Color</md-tooltip>
            <md-icon id="archive">archive</md-icon>
            <md-tooltip id="archive1" md-direction="bottom">Archive</md-tooltip>
          </div>
          <div class="btn">
            <md-button type="button" class="btn btn-secondary" data-dismiss>Close</md-button>
          </div>
        </md-card-actions>
      </md-card>
    </div> -->
<div v-else v-on:click="inputMode">
        <p>
          Take a note ...
          <span class="glyphicon glyphicon-pencil pull-right" data-toggle="tooltip" data-placement="bottom" title="Add Text"></span>
          <span class="glyphicon glyphicon-th-list pull-right" data-toggle="tooltip" data-placement="bottom" title="Add List"></span>
          <span class="glyphicon glyphicon-picture pull-right" data-toggle="tooltip" data-placement="bottom" title="Add Image"></span>
        </p>
      </div>

  </div>
  </div>  <!-- main <div></div> -->
</template>
    
<style lang="scss" scoped>


// Keep Note 

.keep-input{
    background-color: white;
    box-shadow: 1px 1px 5px gray;
    width: 500px;
    padding: 10px;
    font-size: 15px;
    color: #3a3a3a;
    margin: 0 auto;
  }
  .keep-input p{
    margin-top: 5px;
    cursor: text;
    font-size: 16px;
  }
  .keep-input p span{
    font-size: 20px;
    margin-right: 15px;
    cursor: pointer;
  }
  input[type='text'],.text{
    border-style: none;
    outline: none;
    background-color: transparent;
  }
  .title{
    height: 20px;
    width: 480px;
    font-size: 16px;
    font-weight: bolder;
  }
  .text{
    width: 480px;
    margin-top: 15px;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 14px;
    cursor: text;
  }
  .controls{
    width: 100%;
    height: 30px;
  }
  [contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block;
  }
</style>



<script>
  export default {
    components: {},
    name: 'keep-input',
    data() {
      return {
        mode: false,
        inputKeep:{
          title: "",
          text: "",
          list: []
        }
      }
    },
    computed:{
      keepInputMode(){
        return this.$store.state.keepInputMode;
      },
      keeps() {
        return this.$store.getters.keeps;
      },
    },
    methods: {
      addKeep: function(){
        this.$store.commit('changeMode', 'input');
        this.inputKeep.text = this.$refs.text.innerHTML;
        if(this.inputKeep.title.length > 0 || this.inputKeep.text.length > 0){
          this.$store.commit('addKeep', {
            title: this.inputKeep.title,
            text: this.inputKeep.text,
            list: this.inputKeep.list,
            labels: [],
            color: "white"
          });
          this.$refs.text.innerHTML = "";
          this.inputKeep.title = "";
          this.inputKeep.text = "";
        }
      },
      inputMode: function () {
        this.$store.commit('changeMode', 'input');
        var self = this;
        setTimeout(function () {
          self.$refs.text.focus();
        }, 100);
      }
    },
    mounted: function(){
      (function () {
        ('[data-toggle="tooltip"]').tooltip();
      })
    }
  }
</script>