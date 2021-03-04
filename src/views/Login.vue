<template>
  <div>
    Login Page

{{form_validation}}

    <form @submit.prevent="login_submit">
      <table>
        <tr>
          <td class="right-align">Username</td>
          <td>
            <input type="text" name="user_email" id="user_email" v-model="form.email" />
            <label v-if="form_validation.email.invalid">{{ form_validation.email.message }}</label>
          </td>
        </tr>

        <tr>
          <td class="right-align">Password</td>
          <td>
            <input type="password" name="user_pw" id="user_pw" v-model="form.password" />
            <label v-if="form_validation.email.invalid"></label>
          </td>
        </tr>

        <tr>
          <td style="text-align: right">
            <button type="submit" name="form_submit" id="form_submit">
              Log In
            </button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    //
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      form_validation: {
        email: {invalid: false, message: ""},
        password: {invalid: false, message: ""},
      }
    };
  },
  methods: {
    async login_submit() {
      // let http_response = this.$axios
      //   .post("/login", this.form)
      //   .catch((error) => {});
      // console.log(http_response);

      this.$axios
        .post("/login", this.form)
        .then((response) => {
          console.log("======> "+response);
        })
        .catch((error) => {
          if(error.response && (error.response.status >= 400)){
            console.log(error.response.data);
            console.log("\n ==>>>>"+error.response.status+"\n");
            console.log(error.response.headers);

            this.form_validation.email.message = error.response.data.email[0];
            this.form_validation.email.invalid = true;

          }
        });
    },
  },
};
</script>