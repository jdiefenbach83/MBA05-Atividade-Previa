<template>
  <div>
    <transition>
      <v-alert type="error" v-if="message.show">{{message.description}}</v-alert>
    </transition>
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
          @click="signIn"
        >Login
        </v-btn>    
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SignInForm",
  data: () => ({
    email: null,
    password: null,
    isValid: true,
    message: {
      show: false,
      description: '',
    }
  }),
  methods: {
    showMessage(){
      this.message.show = true;
      this.message.description = 'User or password invalid';
      const self = this;
      setTimeout(() => {
        self.message.show = false,
        self.message.description = ''
      }, 3000);
    },
    findUser(email) {    
      return this.$store.state.users.find(user => user.email === email);
    },
    signIn() {
      const user = this.findUser(this.email);
      
      if (user === undefined) {
        this.showMessage();
        return;
      }
      
      if(user.password !== this.password) {
        this.showMessage();
        return;
      }

      this.$store.commit('signedIn', user);
      this.$router.push({ name: 'Users'})      
    }
  }
}
</script>

<style>

</style>