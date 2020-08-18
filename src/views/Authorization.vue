<template>
    <div>
        <h2>Sign in with email</h2>
        <form action="" @submit.prevent="auth">

            <b-field label="Email"
                     :message="emailMessage"
                     >
                <b-input type="email"
                         v-model="formData.email"
                         validation-message="Не верно"
                         required
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Password"
                     :message="passwordMessage">
                <b-input type="password"
                         v-model="formData.password"
                         required
                         password-reveal minlength="5">
                </b-input>
            </b-field>

            <button class="button">Log in</button>

        </form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Authorization",
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                },
                passwordMessage: '',
                emailMessage: ''
            }
        },
        computed: {
            ...mapGetters([
                'userMe',
                'userId',
            ]),
        },
        methods: {
            auth: function () {
                this.passwordMessage = '';
                this.$store.dispatch('Authorization')
                  .then(data => {
                      data.forEach( (user) => {
                          if (user.login === this.formData.email) {
                              this.emailMessage = '';
                              if (user.password == this.formData.password) {
                                  this.$store.dispatch('getUserMe', user.id)
                                    .then(data => {
                                      this.$router.push('/');
                                      return data;
                                  });
                              } else {
                                  this.passwordMessage = 'Error in password';
                              }
                          } else {
                              this.emailMessage = 'Incorrect email';
                          }
                      })
                  });

            }
        }
    }

</script>

<style scoped>
    form{
        width: 400px;
        padding: 10px;
        border: 1px solid #e6e6e6;
        border-radius: 10px;
        margin: 10px auto 0;
    }
</style>
