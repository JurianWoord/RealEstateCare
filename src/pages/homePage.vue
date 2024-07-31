<script setup>

</script>

<template>
  <v-container>
    <v-row>

      <v-col cols="6">
        <v-card>
          <v-card-text class="d-flex justify-center">
            <v-icon icon="mdi-invoice-clock-outline" size="128"></v-icon>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            Scheduled
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card :to="{ name: 'inspectionlist' }">
          <v-card-text class="d-flex justify-center">
            <v-icon icon="mdi-check-circle" size="128"></v-icon>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            Completed
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-text class="d-flex justify-center">
            <v-icon icon="mdi-server" size="128"></v-icon>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            Knowledge base
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-text class="d-flex justify-center">
            <v-icon icon="mdi-cog" size="128"></v-icon>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            Settings
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

</style>
