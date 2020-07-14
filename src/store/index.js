import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      { id: 1, title: 'アプリケーションの使い方', body: '# test \n- test1', opend: false },
      { id: 2, title: '開発環境', body: '# test \n- test2', opend: false },
      { id: 3, title: 'メモ', body: '# test \n- test3', opend: false }
    ],
    editable: true,
    selectDocumentId: 0,
    openDocumentId: []
  },
  mutations: {
    closeDocument (state, id) {
      state.openDocumentId = state.openDocumentId.filter(x => x.id !== id)
    },
    openDocument (state, id) {
      if (state.openDocumentId.includes(id)) {
        return
      }
      state.openDocumentId.push(id)
      state.selectDocumentId = id
    },
    selectDocument (state, id) {
      state.selectDocumentId = id
    },
    modeChange (state, editable) {
      state.editable = editable
    }
  },
  actions: {
  },
  modules: {
  }
})
