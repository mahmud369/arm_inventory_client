<template>
  <div>
    <ul>
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/login">Login</router-link></li>
    <li><a href="javascript:;">Mahmud Hassan</a></li>
		<li><router-link to="/dashboard">Dashboard</router-link></li>
    <li><a href="javascript:;">Log Out</a></li>
    </ul>
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
li {float: left;}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {background-color: #111;}
</style>

<script>
export default {
  name: "Menu",
  components: {
    //
  },
};
</script>