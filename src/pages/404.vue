<template>
  <v-app>
    
    <h1 align="center" class="mt-10"><v-icon class="mr-2 mb-2" large color="red">mdi-block-helper</v-icon>404 - Essa página não existe</h1>
    <h4 align="center"><router-link to="/">Voltar para página inicial</router-link></h4>
  </v-app>
</template>

<script>
  
  export default {
    name: 'register',
    
    data: () => ({
      show: false,
      email: '',
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),

        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
      
    }),

    methods: {
      login: function() {
        this.$router.replace("clients");
      }
    },
  }
</script>