<template>
  <div>
    <ul>
      <li class="float-left"><router-link to="/">Home</router-link></li>
      <template v-if="authenticated">
        <li class="float-right"><a href="javascript:;">Log Out</a></li>
        <li class="float-right"><a href="javascript:;">{{ get_user.user.name }}</a></li>
        <li class="float-right"><router-link to="/dashboard">Dashboard</router-link></li>
      </template>
      <template v-else>
        <li class="float-left"><router-link to="/login">Login</router-link></li>
      </template>
    </ul>
    {{ get_user }}
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li.float-left {float: left}
li.float-right {float: right}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {background-color: #111}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Menu",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      get_user: "auth/get_user",
    }),
  },
};
</script>