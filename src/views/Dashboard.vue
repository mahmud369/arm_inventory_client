<template>
  <div>
    Dashboard Page
    <b-table striped small hover :items="items"></b-table>
    {{ get_token }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    //
  },
  computed: {
    ...mapGetters({
      get_token: "auth/get_token",
    }),
  },
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>