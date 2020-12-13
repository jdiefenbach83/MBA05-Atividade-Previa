<template>
  <v-card>
    <v-card-title>Sign Up Form</v-card-title>
    <v-card-text>
      <v-form v-model="isValid" @submit.prevent >
        <v-text-field 
          label="Name" 
          v-model="name"          
          :rules="rules.nameRules"          
          required
        >
        </v-text-field>
        <v-text-field 
          label="Email" 
          v-model="email"          
          :rules="rules.emailRules"
          error-count="2"
          required
        >
        </v-text-field>
        <v-text-field 
          label="Email confirmation" 
          v-model="emailConfirmation"          
          :rules="rules.emailConfirmationRules"
          error-count="2"
          required
          autocomplete="off"
        >
        </v-text-field>
        <v-text-field 
          label="Password" 
          v-model="password"
          type="password"
          :rules="rules.passwordRules"
          error-count="5"
          required
        ></v-text-field>
        <v-text-field 
          label="Password Confirmation" 
          v-model="passwordConfirmation"          
          type="password"
          :rules="rules.passwordConfirmationRules"
          error-count="2"
          required
        >
        </v-text-field>
      </v-form>
    </v-card-text>    
    <v-card-actions>
      <v-btn 
        color="primary"
        :disabled="!isValid"     
        @click="addUser"     
      >Sign Up
      </v-btn>    
    </v-card-actions>
  </v-card> 
</template>

<script>

export default {
  name: "SignUpForm",
  data: () => ({
    name: null,
    email: null,
    emailConfirmation: null,
    password: null,
    passwordConfirmation: null,
    isValid: true,    
  }),
  computed: {
    rules () {
      return {
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.trim().split(/\s+/).length > 1) || 'Name must have 2 words'
        ],
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
          v => (v && !this.findUser(v)) || 'E-mail already used'
        ],
        emailConfirmationRules: [
          v => !!v || 'Email confirmation is required',
          v => this.email === v || 'E-mail confirmation does not match',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 5) || 'Password must have 5+ characters',
          v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
          v => /(?=.*\d)/.test(v) || 'Must have one number',
          v => /([!@#$%])/.test(v) || 'Must have one special character [!@#$%]'
        ],
        passwordConfirmationRules: [
          v => !!v || 'Password confirmation is required',
          v => this.password === v || 'Password confirmation does not match',
        ],
      }
    }
  },
  methods: {
    findUser(email) {    
      const exists = this.$store.state.users.find(user => user.email === email);
      
      return (exists === undefined ? false : true);
    },
    addUser() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      
      this.$store.commit('addUser', newUser);
      this.$router.push({ name: 'SignIn'})      
    }
  }
}
</script>

<style>

</style>