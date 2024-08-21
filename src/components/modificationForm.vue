<script setup>
import { ref } from 'vue';


const props = defineProps({
  item: {type: Object, default: null}
})

const valid = ref(false);
const executedBy = ['huurder', 'aannemer', 'onbekend']
const actionToBeTaken = ['accepteren', 'laten keuren', 'laten verwijderen', 'laten aanpassen en keuren']

const formData = ref({
  date: props.item?.date || null,
  details: {
    executedBy:  props.item?.details.executedBy || false,
    modificationDescription: props.item?.details.modificationDescription || null,
    actionToBeTaken: props.item?.details.actionToBeTaken || null,
    location: props.item?.details.location || null,
    comments:props.item?.details.comments || null,
    existingModifications:props.item?.details.existingModifications || null,
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
    <h1 class="pa-1 text-center">Aanpassingen</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.details.existingModifications"
            label="Bestaande aanpassingen"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.details.location"
            label="Locatie"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="formData.details.executedBy"
            :items="executedBy"
            label="Uitgevoerd door"
            :rules="[rules.required]"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="formData.details.modificationDescription"
            label="Beschrijving"
            :rules="[rules.required]"
          ></v-textarea>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="formData.details.actionToBeTaken"
            :items="actionToBeTaken"
            label="Te ondernemen actie"
            :rules="[rules.required]"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="formData.details.comments"
            label="Opmerkingen"
            :rules="[rules.required]"
          ></v-textarea>
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
