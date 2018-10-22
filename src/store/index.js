import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      userinfo:{},
      token:'',
      interact:'',
    },
    mutations: {
      'CHANGEINFO' (state,payload) {
        state.userinfo = payload
      },
      'CHANGETOKEN' (state,payload) {
        state.token = payload
      },
      'CHANGEINTERACT' (state,payload) {
        state.interact = payload
      }
    },

    plugins: [
      createPersistedState({
        storage: {
          getItem: key => sessionStorage.getItem(key),
          setItem: (key, value) =>
          sessionStorage.setItem(key, value),
          removeItem: key => sessionStorage.removeItem(key),
        },
      }),
    ],
   

  })

export default store