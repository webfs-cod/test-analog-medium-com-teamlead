<template>
  <form @submit.prevent="saveEdited">

    <b-field label="Post title">
      <b-input v-model="formData.title"></b-input>
    </b-field>

    <b-field label="Message">
      <b-input v-model="formData.description" maxlength="200" type="textarea"></b-input>
    </b-field>

    <button class="button"> Save </button>

  </form>
</template>

<script>
  export default {
    name: "Edit",
    data: function () {
      return {
        formData:{}
      }
    },
    beforeMount() {
      this.$store.dispatch('getSinglePost', this.$route.params.id).then(data => {
        this.formData = data;
      })
    },
    methods: {
      saveEdited(){
        this.formData.updateAt = new Date();
        this.$store.dispatch('saveRedactedPost', this.formData ).then(data => {
          this.$router.push('/');
          return data
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
