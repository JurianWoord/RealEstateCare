<script setup>
import { ref } from 'vue';


const props = defineProps({
  item: {type: Object, default: null}
})

const valid = ref(false);
const installationType = ['koeling', 'verwarming', 'luchtverversing', 'electra', 'beveiliging'];

const formData = ref({
  date: props.item?.date || null,
  details: {
    reportedIssues:  props.item?.details.reportedIssues || false,
    installationType: props.item?.details.installationType || null,
    comments: props.item?.details.comments || null,
    location: props.item?.details.location || null,
    testProcedure:props.item?.details.testProcedure || null,
    approved:props.item?.details.approved || null,
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
    <h1 class="pa-1">Inspectie</h1>
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
            v-model="formData.details.installationType"
            :items="installationType"
            label="Soort installatie"
            :rules="[rules.required]"
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.details.reportedIssues"
            label="Gemelde storing"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.details.testProcedure"
            label="Test procedure"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>


        <v-col cols="12" md="6">
          <v-radio-group v-model="formData.details.approved" label="Goedgekeurd" row>
            <v-radio label="Ja" :value="true"></v-radio>
            <v-radio label="Nee" :value="false"></v-radio>
          </v-radio-group>
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
