<template>

    <v-bottom-navigation bg-color="secondary" grow>
      <v-btn value="recent">
        <v-icon>mdi-wrench</v-icon>

        <span>active task</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-magnify</v-icon>

        <span>Search</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-information</v-icon>

        <span>Information</span>
      </v-btn>
    </v-bottom-navigation>
</template>

<script setup>

</script>

<style scoped lang="sass">
</style>
