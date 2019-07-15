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

          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
          >Nuxt Documentation</a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
          >Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire"
          >Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import StarsTable from '~/components/StarsTable.vue'

export default {

  components: {
    Logo,
    VuetifyLogo,
    StarsTable
  }
}
</script>
