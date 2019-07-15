<template>
  <v-app>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-btn
        href="/"
        flat
        large
      >
      <img
        src="/logo.png"
        alt="Stars Measurements logo"
      >

      </v-btn>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      miniVariant: false,
      right: true
    }
  }
}
</script>
