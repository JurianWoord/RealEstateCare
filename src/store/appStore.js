import {defineStore} from "pinia";
import router from "@/router";
import {useLocalStorage} from "@vueuse/core";


export const useAppStore = defineStore('appStore', {

  state: () => ({
      email : "demo@gmail.com",
      username : useLocalStorage('username', null),
      password : "",
      isLoggedIn :useLocalStorage('isLoggedIn', false),
      avatar: "https://via.placeholder.com/80",
      notifications: true,
      sound: true,
}),

  getters: {
    isDarkMode: ({state}) => {
      const item = localStorage.getItem('theme');

      return item && item === 'dark';
    }
  },

  actions: {
    logout() {
      this.isLoggedIn = false;
      this.username = null;
      router.push({ name: 'login' });
    },
    setLogin(username, password){
      this.username = username;
      this.isLoggedIn = true;
      this.password = password;
    },
  }

})
