import { createStore } from 'vuex'
import contentTable from '../components/content'

export default createStore({
  state: {
    head: [],
    data: [],
    content: [],
  },
  getters: {
  },
  mutations: {
    change_head( state ){
      state.content = contentTable
      Object.values(state.content).forEach(element => {
        state.data.push(element)
      })
      state.head = Object.keys(state.data[0])
    }
  },
  actions: {
    Change_head({ commit }){
      commit('change_head')
    }
  },
  modules: {
  }
})
