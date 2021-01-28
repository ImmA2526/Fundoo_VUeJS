<template>
  <div>
      <md-card>
        <md-card-content>

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
  post: function () {
    this.$http
      .post("http://fundoonotes.incubation.bridgelabz.com/api/note", {
        title: this.title,
        description: this.description,
        cartId: "",
      })
      .then(function (data) {
        this.$router.push("/display");
        console.log(data);
      })
      .catch();
  },

  data: () => ({
    title: null,
    description: null,
  }),
};
</script>

