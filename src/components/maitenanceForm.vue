<script setup>
import { ref } from 'vue';


const props = defineProps({
  item: {type: Object, default: null}
})

const valid = ref(false);
const maintenanceTypes = ['schilderwerk', 'houtrot', 'electra', 'lijdingweerk', 'beglazing'];
const costsEstamination = ['0-500', '500-1.500', '1.500+']

const formData = ref({
  date: props.item?.date || null,
  details: {
    acuteActionRequired:  props.item?.details.acuteActionRequired || false,
    costEstimate: props.item?.details.costEstimate || null,
    description: props.item?.details.description || null,
    location: props.item?.details.location || null,
    maintenanceType:props.item?.details.maintenanceType || null,
  },
  inspectionId: props.item?.inspectionId || null,
  propertyId: props.item?.propertyId || null,
})

const rules = {
  required: value => !!value || 'Dit veld is verplicht',
};

</script>

<template>

  <v-container>
    <h1 class="pa-1">Onderhoud</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.details.location"
            label="Locatie"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="formData.details.maintenanceType"
            :items="maintenanceTypes"
            label="Soort onderhoud"
            :rules="[rules.required]"
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-radio-group v-model="formData.details.acuteActionRequired" label="Acute actie vereist" row>
            <v-radio label="Ja" :value="true"></v-radio>
            <v-radio label="Nee" :value="false"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="formData.details.costEstimate"
            :items="costsEstamination"
            label="Kosten"
            :rules="[rules.required]"
          ></v-select>
        </v-col>


        <v-col cols="12">
          <v-btn @click="" :disabled="true">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>

</template>

<style scoped lang="sass">

</style>
