<script setup>
import {useAppStore} from "@/store/appStore";
const appstore = useAppStore()
import {storeToRefs} from "pinia";
import {useTheme} from "vuetify";
import {computed} from "vue";
import {get} from "@vueuse/core";

const avatar = appstore.avatar
const username = appstore.username
const email = appstore.email
const password = appstore.password
const { notifications, sound } = storeToRefs(appstore)
const theme = useTheme();


const toggleDarkMode = function(){

  const currentTheme = theme.global.current.value.dark ? 'light' : 'dark';
  theme.global.name.value = currentTheme;
  localStorage.setItem('theme', currentTheme)
}

const getValue = function(){
  return appstore.isDarkMode;
}

</script>
<template>
  <v-container>
    <v-card>
      <v-card-title>
        Instellingen
      </v-card-title>
      <v-card-text>
        <!-- Avatar Instellen -->
        <v-row>
          <v-col cols="12">
            <v-avatar size="80">
              <img :src="avatar" alt="Avatar" />
            </v-avatar>
            <v-file-input
              label="Kies een nieuwe avatar"
              accept="image/*"
              @change=""
            ></v-file-input>
          </v-col>
        </v-row>

        <!-- Account Gegevens -->
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Naam"
              v-model="username"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="E-mail"
              outlined
              v-model="email"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Wachtwoord -->
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Wachtwoord"
              type="password"
              v-model="password"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Voorkeuren Interface (Licht/Donker Thema) -->
        <v-row>
          <v-col cols="12">
            <v-switch
              label="Donker Modus"
              :model-value="getValue()"
              @click.stop="toggleDarkMode"
            ></v-switch>
          </v-col>
        </v-row>

        <!-- Meldingen en Geluiden -->
        <v-row>
          <v-col cols="12" sm="6">
            <v-switch
              label="Meldingen Weergeven"
              v-model="notifications"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              label="Geluiden Aanzetten"
              v-model="sound"
            ></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn block color="primary" :disabled="true" @click="">Opslaan</v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn block color="red" @click="appstore.logout">Uitloggen</v-btn>
        </v-col>
      </v-row>
    </v-card>


  </v-container>
</template>

<style scoped lang="sass">

</style>
