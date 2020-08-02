import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    documents: [
      { id: 1, title: 'アプリケーションの使い方', body: '# test \n- test1', opend: false },
      { id: 2, title: '開発環境', body: '# test \n- test2', opend: false },
      { id: 3, title: 'メモ', body: '# test \n- test3', opend: false }
    ],
    tree: [
      {
        title: '粟田恭介',
        expand: true,
        render: (h, { root, node, data }) => {
          return h('span', {
            style: {
              display: 'inline-block',
              width: '100%'
            }
          }, [
            h('span', [
              h('Icon', {
                props: {
                  type: 'ios-folder-outline'
                },
                style: {
                  marginRight: '0.5em'
                }
              }),
              h('span', data.title)
            ]),
            h('span', {
              style: {
                display: 'inline-block',
                float: 'right',
                marginRight: '2.3em'
              }
            })
          ])
        },
        children: [
          {
            title: 'メモ',
            expand: true,
            children: [
              {
                document_id: 1,
                title: 'アプリケーションの使い方',
                children: [],
                isFolder: false,
                contextmenu: true
              },
              {
                document_id: 2,
                title: '開発環境',
                children: [],
                isFolder: false,
                contextmenu: true
              },
              {
                document_id: 3,
                title: 'サンプル',
                children: [],
                isFolder: false,
                contextmenu: true
              }
            ],
            isFolder: true,
            contextmenu: true
          }
        ]
      }
    ],
    editable: false,
    selectDocumentId: 0,
    openDocumentId: []
  },
  mutations: {
    closeDocument (state, id) {
      state.openDocumentId = state.openDocumentId.filter(x => x !== id)
      if (state.openDocumentId.length > 0) {
        state.selectDocumentId = state.openDocumentId[0]
      } else {
        state.selectDocumentId = undefined
      }
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
