<script setup>
import { ref, onMounted } from 'vue';
import { getInspections } from '@/service/inspectionService';
import DamageForm from "@/components/damageForm.vue";
import ModificationForm from "@/components/modificationForm.vue";
import InstallationForm from "@/components/installationForm.vue";
import MaintenanceForm from "@/components/maitenanceForm.vue";

const inspections = ref([]);
const showDialog = ref(false);
const selectedItem = ref(null);


const headers = [
  { title: 'Number', key: 'inspectionId', align: 'start' },
  { title: 'Location', key: 'propertyId', align: 'start' },
  { title: 'Date', key: 'date', align: 'start' },
]

const fetchInspections = async () => {
  try {
    const data = await getInspections();
    console.log('Sorted inspections data:', data); // Log de gesorteerde data
    inspections.value = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error fetching inspections:', error);
  }
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

onMounted(() => {
  console.log('Component mounted, fetching inspections...'); // Log bij het mounten van de component
  fetchInspections();
});


const onRowClick = function(e, { item }){
selectedItem.value = {...item};
showDialog.value = true;
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <span class="headline">Inspection Reports</span>
          </v-card-title>
          <v-card-text class="pa-0">
            <v-data-table :headers="headers" :items="inspections" @click:row="onRowClick">
              <template v-slot:item.date="{ value }">
                {{ formatDate(value) }}
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="showDialog" fullscreen
    v-if="showDialog">
      <v-card>
        <DamageForm v-if="selectedItem.damage && Object.keys(selectedItem.damage).some(key => selectedItem.damage[key] !== null)" :item="selectedItem" />
        <ModificationForm v-if="selectedItem.modification && Object.keys(selectedItem.modification).some(key => selectedItem.modification[key] !== null)" :item="selectedItem" />
        <InstallationForm v-if="selectedItem.installation && Object.keys(selectedItem.installation).some(key => selectedItem.installation[key] !== null)" :item="selectedItem" />
        <MaintenanceForm v-if="selectedItem.maintenance && Object.keys(selectedItem.maintenance).some(key => selectedItem.maintenance[key] !== null)" :item="selectedItem" />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped lang="sass">

</style>
