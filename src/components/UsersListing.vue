<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      item-key="email"
      class="elevation-1"
      :search="search"
      :custom-filter="filterList"
      sear
    >
      <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          >
          </v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    name: "UsersListing",
    data() {        
      return {
        users: this.$store.state.users,
        search: ''
      };
    },
    methods: {     
      filterList (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search.toLocaleUpperCase()) !== -1
      },
    },
    computed: {
      headers () {
        return [
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          {
            text: 'Email',
            align: 'start',
            sortable: true,
            value: 'email',
          }
        ]
      }
    }
  }
</script>

<style>

</style>