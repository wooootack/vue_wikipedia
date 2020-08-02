<template>
  <div class="home-container">

    <div class="tabs">
      <TabItem
        v-for="item in openedDocument"
        v-bind="item" :key="item.id"
        @tabClose="tabClose" />
    </div>
    <div class="contents">
      <MarkdownViewer
        :body="currentBody" />
    </div>

  </div>
</template>

<script>
import TabItem from '@/components/organisms/TabItem.vue'
import MarkdownViewer from '@/components/organisms/MarkdownViewer'

export default {
  data: function () {
    return {
      keyword: ''
    }
  },
  components:
  {
    TabItem,
    MarkdownViewer
  },
  computed: {
    currentBody () {
      return this.$store.getters.currentBody
    },
    openedDocument () {
      return this.$store.state.documents.filter(x => this.$store.state.openDocumentId.includes(x.id))
    }
  },
  methods: {
    tabClose (id) {
      this.$store.commit('closeDocument', id)
    },
    save () {
      console.log(this.$store.selectDocumentId)
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

</style>
