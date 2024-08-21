<script setup>

</script>

<template>
  <v-container>
    <v-row>

      <v-col cols="6">
        <v-card class="d-flex flex-column align-center justify-center">
          <v-card-text>
            <v-icon icon="mdi-invoice-clock-outline" size="128"></v-icon>
          </v-card-text>
          <v-card-actions>
            <div class="text-center">
              Toegewezen rapportages
            </div>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card :to="{ name: 'inspectionlist' }" class="d-flex flex-column align-center justify-center">
          <v-card-text>
            <v-icon icon="mdi-check-circle" size="128"></v-icon>
          </v-card-text>
          <v-card-actions>
            <div class="text-center">
              Uitgevoerde rapportages
            </div>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="d-flex flex-column align-center justify-center">
          <v-card-text>
            <v-icon icon="mdi-server" size="128"></v-icon>
          </v-card-text>
          <v-card-actions>
            <div class="text-center">
              Documentatie
            </div>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="d-flex flex-column align-center justify-center">
          <v-card-text>
            <v-icon icon="mdi-cog" size="128"></v-icon>
          </v-card-text>
          <v-card-actions>
            <div class="text-center">
              Instellingen
            </div>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

</style>
