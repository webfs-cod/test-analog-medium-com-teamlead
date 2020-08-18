<template>
  <div id="app">
    <div id="nav">
      <router-link class="home" to="/">Medium</router-link>
      <router-link v-if="userMe.role === 'writer'" to="/create">Create</router-link>
      <router-link v-show="userId == 0" to="/authorization">Sign in</router-link>
      <b-button @click="logOut" v-show="userId > 0">Log out</b-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Main',
  methods: {
    logOut() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    ...mapGetters([
      'userMe',
      'userId',
    ])
  },
  mounted() {
    this.id = localStorage.getItem('id');
    if(localStorage.getItem('id') && localStorage.getItem('id') > 0) {
      this.$store.dispatch('getUserMe', localStorage.getItem('id'))
          .then(data => {
            return data;
          });
    }

  }
}

</script>

<style>

body{
  padding: 0;
  margin: 0;
}

*{
  box-sizing: border-box;
}

#nav{
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
