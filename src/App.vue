<template>
  <v-app>

    <v-main>
      <AppHeader/>
      <app-main/>
    </v-main>

    <AppFooter/>
  </v-app>
</template>

<script setup>

  //
  import AppHeader from "@/components/AppHeader.vue";
  import AppFooter from "@/components/AppFooter.vue";
  import AppMain from "@/components/AppMain.vue";
</script>
