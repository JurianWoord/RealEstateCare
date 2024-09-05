<script setup>
import { ref } from 'vue';

const documents = ref([
  {
    name: "Bestaande aanpassingen",
    url: "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf",
  },
  {
    name: "Testprocedure koeling ",
    url: "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf",
  },
  {
    name: "Testprocedure verwarming",
    url: "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf",
  },
  {
    name: "Testprocedure luchtverversing",
    url: "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf",
  },
  {
    name: "Testprocedure elektra",
    url: "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf",
  },
  {
    name: "Testprocedure leidingwerk",
    url: "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf",
  },
  {
  name: "Testprocedure beglazing",
  url: "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf",
},

]);

const selectedDocument = ref(null);
const pdfViewerDialog = ref(false);


const viewDocument = (document) => {
  selectedDocument.value = document;
  pdfViewerDialog.value = true;
};

const deleteDocument = (index) => {
  documents.value.splice(index, 1);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5">
          <v-card-title class="headline">Documenten</v-card-title>
          <v-divider class="my-4" />

          <v-list lines="three">
            <v-list-item
              v-for="(document, index) in documents"
              :key="index"
              @click="viewDocument(document)"
            >
              <v-list-item-title>{{ document.name }}</v-list-item-title>
              <v-list-item-action>
                <v-btn
                  icon="mdi-delete"
                  @click.stop="deleteDocument(index)"
                ></v-btn>
              </v-list-item-action>
              <v-divider class="my-4" />
            </v-list-item>
          </v-list>

          <v-dialog v-model="pdfViewerDialog" max-width="800">
            <v-card>
              <v-card-title class="headline">PDF Viewer</v-card-title>
              <v-card-text>
                <iframe
                  v-if="selectedDocument"
                  :src="selectedDocument.url"
                  width="100%"
                  height="500px"
                ></iframe>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="pdfViewerDialog = false">Sluit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped lang="sass">

</style>
