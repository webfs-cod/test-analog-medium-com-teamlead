<template>
  <form @submit.prevent="create">

    <b-field label="Post title">
      <b-input v-model="formData.title" minlength="3" required></b-input>
    </b-field>

    <b-field label="Message">
      <b-input v-model="formData.description" maxlength="200" type="textarea" minlength="5" required></b-input>
    </b-field>

    <button class="button"> Save </button>

  </form>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "Create",
    data: function () {
      return {
        formData:{
          title: "",
          description: "",
          claps: 0,
          createdAt: new Date(),
          updateAt: new Date(),
          userId: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'userId',
      ])
    },
    methods: {
      create(){
        this.formData.userId = this.userId;
        this.$store.dispatch('createPost', this.formData).then(data => {
          this.$router.push('/');
          return data;
        })
      }
    }
  }
</script>

<style scoped>
  form{
    padding: 10px;
    max-width: 500px;
    margin: 20px auto;
  }
</style>
