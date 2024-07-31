<script setup>
import { ref, onMounted } from 'vue';
import { getInspections } from '@/service/inspectionService';


const inspections = ref([]);

const headers = [
  { title: 'Number', key: 'inspectionId', align: 'start' },
  { title: 'type', key: 'type', align: 'start' },
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
            <v-data-table :headers="headers" :items="inspections">
              <template v-slot:item.date="{ value }">
                {{ formatDate(value) }}
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

</style>
