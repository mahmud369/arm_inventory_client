import axios from 'axios';

export default {
  namespaced: true,

  state: {
    auth_token: null,
    auth_user: null
  },

  getters: {
    authenticated(state) {
      return state.auth_token && state.auth_user;
    },

    get_user(state) {
      return state.auth_user;
    },

    get_token(state){
      return state.auth_token;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.auth_token = token;
    },
    SET_USER(state, data) {
      state.auth_user = data;
    },
  },

  actions: {
    async sign_in({ dispatch }, credentials) {
      /* 
      await axios.post("/login", credentials)
        .then((response) => {
          return dispatch('attempt', response.data.token);
        })
        .catch((error) => {
          if (error.response && (error.response.status >= 400)) {
            console.log(error.response.data);
          }
        }); 
      */

      let response = await axios.post("/login", credentials);
      return dispatch('attempt', response.data.token);
    },

    async attempt({ commit }, token) {
      commit('SET_TOKEN', token);
      try {
        /*
        let response_token = await axios.get("/profile", {
          headers: {
            'Authorization': 'bearer ' + token
          }
        }); 
        */

        let response_token = await axios.get("/profile");
        commit('SET_USER', response_token.data);
      } catch (e) {
        //console.log("Token Failed");
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
      }
    }
  }

}