<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {useAppStore} from "@/store/appStore";

const router = useRouter();

const username = ref('demo');
const password = ref('password');
const twoFACode = ref('');
const generated2FACode = ref('');
const is2FAStep = ref(false);
const errorMessage = ref('');
const appStore = useAppStore();

function handleLogin() {
  const validUsername = 'demo';
  const validPassword = 'password';

  if (username.value === validUsername && password.value === validPassword) {
    is2FAStep.value = true;
    generated2FACode.value = Math.floor(100000 + Math.random() * 900000).toString();
    setTimeout(() => {twoFACode.value = generated2FACode.value;}, 1000);
    console.log("Simulated 2FA code:", generated2FACode.value);
  } else {
    errorMessage.value = 'Ongeldige gebruikersnaam of wachtwoord.';
  }
}

function handle2FA() {
  if (twoFACode.value === generated2FACode.value) {
    appStore.setLogin(username.value, password.value);
    router.push({ name: 'home' });
  } else {
    errorMessage.value = 'Ongeldige 2FA-code.';
  }
}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card v-if="!is2FAStep">
          <v-card-title class="text-center">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                label="Username"
                v-model="username"
                required
              ></v-text-field>

              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                required
              ></v-text-field>

              <v-btn type="submit" color="primary" block>Login</v-btn>
            </v-form>
            <v-alert
              v-if="errorMessage"
              type="error"
              class="mt-3"
              dense
            >
              {{ errorMessage }}
            </v-alert>
          </v-card-text>
        </v-card>

        <v-card v-else>
          <v-card-title class="text-center text-h6 mb-4">Verifieer je account.</v-card-title>
          <v-card-text class="text-center text-body-2">
            We hebben een verificatiecode verzonden naar het bij ons bekende emailadres. <br>
            Controleer je e-mail en vul de code hieronder in.
          </v-card-text>
          <v-card-text>
            <v-form @submit.prevent="handle2FA">
              <v-otp-input
                v-model="twoFACode"
                required

              ></v-otp-input>

              <v-btn type="submit" color="primary" block>Verify</v-btn>
            </v-form>
            <v-alert
              v-if="errorMessage"
              type="error"
              class="mt-3"
              dense
            >
              {{ errorMessage }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
