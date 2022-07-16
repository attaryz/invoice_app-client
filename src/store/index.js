import { createStore } from "vuex"
import { defineStore } from "pinia"

// export const useAuth = defineStore("auth", {
//   //   state: () => {
//   //     return {
//   //       user: {
//   //         username: "",
//   //       },
//   //       isAuthenticated: false,
//   //     }
//   //   },
//   //   actions: () => {
//   //     return {
//   //       initializeStore(state) {
//   //         if (localStorage.getItem("token")) {
//   //           state.token = localStorage.getItem("token")
//   //           state.isAuthenticated = true
//   //         } else {
//   //           state.token = ""
//   //           state.isAuthenticated = false
//   //         }
//   //       },
//   //       setToken(state, token) {
//   //         state.token = token
//   //         state.isAuthenticated = true
//   //       },
//   //       removeToken(state) {
//   //         state.token = ""
//   //         state.isAuthenticated = false
//   //       },
//   //     }
//   //   },
// })
export default createStore({
  state: {
    user: {
      username: "",
    },
    isAuthenticated: false,
  },
  actions: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token")
        state.isAuthenticated = true
      } else {
        state.token = ""
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ""
      state.isAuthenticated = false
    },
  },
})
