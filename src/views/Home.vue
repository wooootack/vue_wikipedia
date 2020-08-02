<template>
  <div class="home-container">

    <Header :class="edit" />

    <div :class="[show, 'tabs']">
      <TabItem
        v-for="item in openedDocument"
        v-bind="item" :key="item.id"
        @tabClose="tabClose" />
    </div>
    <div :class="[show, 'contents']">
      <MarkdownViewer
        :body="currentBody" />
    </div>

    <div :class="[edit, 'new-container']">
      <MarkdownEditor class="editor-box" />
    </div>

  </div>
</template>

<script>
import TabItem from '@/components/organisms/TabItem.vue'
import MarkdownViewer from '@/components/organisms/MarkdownViewer'
import MarkdownEditor from '@/components/organisms/MarkdownEditor.vue'
import Header from '@/components/organisms/Header'

export default {
  data: function () {
    return {
      keyword: ''
    }
  },
  components:
  {
    TabItem,
    MarkdownViewer,
    MarkdownEditor,
    Header
  },
  computed: {
    currentBody () {
      const current = this.$store.state.documents.find(x => x.id === this.$store.state.selectDocumentId)
      if (current === undefined) {
        return ''
      }
      return current.body
    },
    openedDocument () {
      return this.$store.state.documents.filter(x => this.$store.state.openDocumentId.includes(x.id))
    },
    show () {
      return this.$store.state.editable ? 'hide' : false
    },
    edit () {
      return this.$store.state.editable ? false : 'hide'
    }
  },
  methods: {
    tabClose (id) {
      this.$store.commit('closeDocument', id)
    }
  }
}
</script>

<style scoped>

.home-container {
  width: 99%;
  height: 96%;
}

.contents {
  padding: 1em;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
  transition: all 0.8s ease;
}

.hide {
  display: none;
}

/* トランジション用スタイル */
.v-leave-active {
  position: absolute;
}

.v-enter {
  transform: translateX(-100%);
}

.v-leave-to {
  transform: translateX(100%);
}

.new-container {
  height: 100%;
}

.input-container {
  display: flex;
  justify-content: space-around;
}

.title-input {
  display:inline-flex;
  flex:2;
}

.path-input {
  display:inline-flex;
  flex:1;
}

.editor-box {
  height: 90%;
}

</style>
