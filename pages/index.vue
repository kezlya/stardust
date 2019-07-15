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
      <div class="text-xs-center">
      </div>
      <v-card>
        <v-card-title class="headline">Stars measurement data</v-card-title>
        <v-card-text>
          <p>Contribute it on the github <a
            href="https://github.com/kezlya/stardust/issues"
            target="_blank"
            title="contribute"
          >issue board</a>.</p>

          <stars-table />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import StarsTable from '~/components/StarsTable.vue'

export default {
  components: {
    StarsTable
  }
}
</script>
