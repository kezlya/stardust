<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">Details about {{this.$route.query.id}}</v-card-title>
        <v-card-text>
          <pre>{{this.starData}}</pre>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import searchService from "~/services/Search";

export default {
  data: () => ({
    starData: "",
  }),
  created() {
    this.loadStar();
  },
  methods: {
    async loadStar(){
      //TODO: add pagination Hardcoded 20
      searchService.getStar(this.$route.query.id).then(data =>{
        if (data != null) {
          this.starData = data.Raw;
        }
      });
    }
  }
};
</script>
