import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      { id: 1, title: 'アプリケーションの使い方', body: '# test \n- test1', opend: false, selected: false },
      { id: 2, title: '開発環境', body: '# test \n- test2', opend: false, selected: false },
      { id: 3, title: 'メモ', body: '# test \n- test3', opend: false, selected: false }
    ]
  },
  mutations: {
    closeDocument (state, id) {
      state.list.find(x => x.id === id).opend = false

      if (state.list.find(x => x.id === id).selected) {
        if (state.list.filter(x => x.opend).length > 0) {
          state.list.find(x => x.opend).selected = true
        }
      }

      state.list.find(x => x.id === id).selected = false
    },
    openDocument (state, id) {
      state.list.forEach(x => { x.selected = false })
      state.list.find(x => x.id === id).opend = true
      state.list.find(x => x.id === id).selected = true
    },
    selectDocument (state, id) {
      state.list.forEach(x => { x.selected = false })
      state.list.find(x => x.id === id).selected = true
    }
  },
  actions: {
  },
  modules: {
  }
})
