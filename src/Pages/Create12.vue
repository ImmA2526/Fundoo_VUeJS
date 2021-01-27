<template>
  <div>
    <div v-if="open == false" @click="toggle" class="createnote">
      <md-card class="card1"> 
      <div class="input">
        <input type="text" placeholder="Take a note...." class="input1" />
      </div>

      <div class="creaticon">
        <md-button class="md-icon-button">
          <md-icon>lsit</md-icon>
          <md-tooltip md-direction="bottom">New List</md-tooltip>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>lsit</md-icon>
          <md-tooltip md-direction="bottom">New lists</md-tooltip>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>lsit</md-icon>
          <md-tooltip md-direction="bottom">New Lt</md-tooltip>
        </md-button>
    </div>
    </md-card>
  </div>


<div v-if="open == false" @click="toggle" class="createnote">
      <md-card class="card1"> 
      <div class="input">
        <input type="text" placeholder="Take a note...." class="input1" />
      </div>

      <div class="creaticon">
        <md-button class="md-icon-button">
          <md-icon>lsit</md-icon>
          <md-tooltip md-direction="bottom">New List</md-tooltip>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>lsit</md-icon>
          <md-tooltip md-direction="bottom">New lists</md-tooltip>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>lsit</md-icon>
          <md-tooltip md-direction="bottom">New Lt</md-tooltip>
        </md-button>
    </div>
    </md-card>


  </div>
  </div>

</template>

