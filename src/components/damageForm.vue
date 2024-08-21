<script setup>
import { ref } from 'vue';


const props = defineProps({
  item: {type: Object, default: null}
})

const valid = ref(false);
const damageTypes = ['moedwillig', 'slijtage', 'geweld', 'normaal gebruik', 'calamiteit', 'anders'];

const formData = ref({
  date: props.item?.date || null,
  details: {
    acuteActionRequired:  props.item?.details.acuteActionRequired || false,
    damageType: props.item?.details.damageType || null,
    description: props.item?.details.description || null,
    location: props.item?.details.location || null,
    newDamage:props.item?.details.newDamage || null,
  },
  inspectionId: props.item?.inspectionId || null,
  propertyId: props.item?.propertyId || null,
})

const rules = {
  required: value => !!value || 'Dit veld is verplicht',
};

function formatDate (value) {
  if (value) {
    let date = new Date(value);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().substr(0, 10).split('-').reverse().join('-');
  }
}


</script>

<template>

  <v-container>
    <h1 class="pa-1 text-center">Schade</h1>
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
          <v-radio-group v-model="formData.details.newDamage" label="Nieuwe schade" row>
            <v-radio label="Ja" :value="true"></v-radio>
            <v-radio label="Nee" :value="false"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="formData.details.damageType"
            :items="damageTypes"
            label="Soort schade"
            :rules="[rules.required]"
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-text-field
                :model-value="formatDate(formData.date)"
                label="Datum"
                append-inner-icon="mdi-calendar"
                readonly
                v-bind="props"
                :rules="[rules.required]"
              ></v-text-field>
            </template>
            <v-date-picker
              hide-actions
              hide-header
              title=""
              v-bind="$attrs"
              v-model="formData.date"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" md="6">
          <v-radio-group v-model="formData.details.acuteActionRequired" label="Acute actie vereist" row>
            <v-radio label="Ja" :value="true"></v-radio>
            <v-radio label="Nee" :value="false"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="formData.details.description"
            label="Omschrijving"
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
