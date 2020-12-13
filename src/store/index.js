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
    signedIn: {},
  },
  mutations: {
    addUser(state, data) {
      state.users.push(data);
    }
  },
  actions: {
  },
  modules: {
  }
})
