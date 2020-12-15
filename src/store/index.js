import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        password: '123456'
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
        password: '123456'
      },
    ],
    authenticatedUser: {},
  },
  mutations: {
    addUser(state, data) {
      console.log('state', state);
      console.log('data', data);
      state.users = [ ...state.users, data ]
    },
    signedIn(state, data) {
      state.authenticatedUser = data;
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    isAuthenticated: state => Object.keys(state.authenticatedUser).length > 0,
  }
})
