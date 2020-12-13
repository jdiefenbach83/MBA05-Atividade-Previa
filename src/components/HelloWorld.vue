<template>  
  <v-row class="text-center">
    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Welcome to my previous activity
      </h1>

      <p class="subheading font-weight-regular">
        You que can see the repository at
        <a
          href="https://github.com/jdiefenbach83/atividade-previa"
          target="_blank"
        >Github</a>
      </p>
    </v-col>
  </v-row>  
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>
