<template>
  <div class="users">
    <h1>Users List page</h1>
    <UsersListing />
  </div>
</template>

<script>
  import UsersListing from "../components/UsersListing";
  export default {
    name: "Users",
    components: {UsersListing}
  }
</script>
