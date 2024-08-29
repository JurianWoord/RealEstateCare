<script setup>
import {useAppStore} from "@/store/appStore";

const appstore = useAppStore()
</script>

<template>


  <h1>{{ appstore.count }}</h1>
  <v-btn @click="appstore.increment()">hallo</v-btn>

</template>

<style scoped lang="sass">

</style>
