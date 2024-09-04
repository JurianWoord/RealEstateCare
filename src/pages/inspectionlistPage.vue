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
const tab = ref('damage');

const headers = [
  { title: 'Nummer', key: 'inspectionId', align: 'start' },
  { title: 'Locatie', key: 'propertyId', align: 'start' },
  { title: 'Datum', key: 'date', align: 'start' },
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
            <span class="headline">Uitgevoerde inspecties</span>
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
        <v-tabs
          show-arrows
          v-model="tab"
          bg-color="primary"
        >
          <v-tab value="damage">Schade</v-tab>
          <v-tab value="installation">Aanpassingen</v-tab>
          <v-tab value="modicication">Inspectie</v-tab>
          <v-tab value="maitenance">onderhoud</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab" style="height: 100%; overflow-y: auto;">
          <v-tabs-window-item value="damage">
            <DamageForm
              :item="selectedItem"
              @close="showDialog = false" />
          </v-tabs-window-item>

          <v-tabs-window-item value="installation">
            <ModificationForm
              :item="selectedItem"
              @close="showDialog = false"
            />
          </v-tabs-window-item>

          <v-tabs-window-item value="modicication">
            <InstallationForm
              :item="selectedItem"
              @close="showDialog = false"
            />
          </v-tabs-window-item>

          <v-tabs-window-item value="maitenance">
            <MaintenanceForm
              :item="selectedItem"
              @close="showDialog = false"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped lang="sass">

</style>
