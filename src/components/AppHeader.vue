<script setup>

</script>

<template>
  <v-system-bar color="primary">
    <v-icon icon="mdi-wifi-strength-4"></v-icon>
    <v-icon icon="mdi-signal" class="ms-2"></v-icon>
    <v-icon icon="mdi-battery" class="ms-2"></v-icon>

    <span class="ms-2">3:13PM</span>
  </v-system-bar>
  <v-toolbar color="secondary">

    <v-img @click="$router.push({ name: 'home' })" src="@/assets/logoREC-white.svg" class="text-white"></v-img>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-bell" />
    <v-btn icon="mdi-cog" @click="$router.push({name: 'settings'})"/>

  </v-toolbar>
</template>

<style scoped lang="sass">

</style>
