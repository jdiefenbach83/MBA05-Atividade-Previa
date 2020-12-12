<template>
  <v-card>
    <v-card-title>Login Form</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field 
          label="Email" 
          v-model="email"
          :rules="[v => !!v || 'Email is required']"
          required
        >
        </v-text-field>
        <v-text-field 
          label="Password" 
          v-model="password"
          type="password"
          :rules="[v => !!v || 'Password is required']"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>    
    <v-card-actions>
      <v-btn 
        color="primary"
        :disabled="!isValid"
      >Login
      </v-btn>    
    </v-card-actions>
  </v-card> 
</template>

<script>
export default {
  name: "SignInForm",
  data: () => ({
    email: null,
    password: null,
    isValid: true
  })
}
</script>

<style>

</style>