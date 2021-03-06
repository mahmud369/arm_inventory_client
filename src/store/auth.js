import axios from 'axios';

export default {
  namespaced: true,  
  state: {
    auth_token: null,
    auth_user: null
   },  
  mutations: {
    //
  },
  actions: {
    async sign_in({ dispatch }, credentials) {

      await axios.post("/login", credentials)
      .then((response) => {
        console.log(response);
        dispatch('attempt', response.data.token);
      })
      .catch((error) => { 
        if(error.response && (error.response.status >= 400)){
          console.log(error.response.data);
        }
      });

    },
    async attempt(_, token) {
      console.log("AUTH_TOKEN==>>>"+token);
    }
  }
}
