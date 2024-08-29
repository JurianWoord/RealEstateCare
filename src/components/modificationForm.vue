<script setup>
import { ref } from 'vue';


const props = defineProps({
  item: {type: Object, default: null},
})

const emit = defineEmits(['close']);

const valid = ref(false);
const executedBy = ['huurder', 'aannemer', 'onbekend']
const actionToBeTaken = ['accepteren', 'laten keuren', 'laten verwijderen', 'laten aanpassen en keuren']

const formData = ref({
  date: props.item?.date || null,
  inspectionId: props.item?.inspectionId || null,
  propertyId: props.item?.propertyId || null,
  damage: {
    location: props.item?.damage?.location || null,
    newDamage: props.item?.damage?.newDamage || null,
    damageType: props.item?.damage?.damageType || null,
    acuteActionRequired: props.item?.damage?.acuteActionRequired || null,
    description: props.item?.damage?.description || null,
    photos: props.item?.damage?.photos || []
  },
  maintenance: {
    location: props.item?.maintenance?.location || null,
    maintenanceType: props.item?.maintenance?.maintenanceType || null,
    acuteActionRequired: props.item?.maintenance?.acuteActionRequired || null,
    costEstimate: props.item?.maintenance?.costEstimate || null,
    description: props.item?.maintenance?.description || null,
    photos: props.item?.maintenance?.photos || []
  },
  installation: {
    location: props.item?.installation?.location || null,
    installationType: props.item?.installation?.installationType || null,
    reportedIssues: props.item?.installation?.reportedIssues || null,
    testProcedure: props.item?.installation?.testProcedure || null,
    approved: props.item?.installation?.approved || null,
    comments: props.item?.installation?.comments || null,
    photos: props.item?.installation?.photos || []
  },
  modification: {
    existingModifications: props.item?.modification?.existingModifications || null,
    location: props.item?.modification?.location || null,
    executedBy: props.item?.modification?.executedBy || null,
    modificationDescription: props.item?.modification?.modificationDescription || null,
    actionToBeTaken: props.item?.modification?.actionToBeTaken || null,
    comments: props.item?.modification?.comments || null,
    photos: props.item?.modification?.photos || []
  }
});

const rules = {
  required: value => !!value || 'Dit veld is verplicht',
};


</script>

<template>

  <v-container>
    <h1 class="pa-1 text-center">Aanpassingen</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.modification.existingModifications"
            label="Bestaande aanpassingen"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.modification.location"
            label="Locatie"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="formData.modification.executedBy"
            :items="executedBy"
            label="Uitgevoerd door"
            :rules="[rules.required]"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="formData.modification.modificationDescription"
            label="Beschrijving"
            :rules="[rules.required]"
          ></v-textarea>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="formData.modification.actionToBeTaken"
            :items="actionToBeTaken"
            label="Te ondernemen actie"
            :rules="[rules.required]"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="formData.modification.comments"
            label="Opmerkingen"
            :rules="[rules.required]"
          ></v-textarea>
        </v-col>

        <v-col cols="12">
          <v-file-input
            label="Bewijs toevoegen"
            prepend-icon="mdi-camera"
            multiple
          ></v-file-input>
        </v-col>

        <v-col cols="12">
          <v-btn @click="" :disabled="true" block >Opslaan</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn @click="emit('close')" color="primary" block >Sluiten</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>

</template>

<style scoped lang="sass">

</style>
