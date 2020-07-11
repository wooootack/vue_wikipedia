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
  components:
  {
    TabItem,
    MarkdownViewer
  },
  computed: {
    currentBody () {
      if (this.$store.state.list.find(x => x.opend && x.selected) === undefined) {
        return ''
      }
      return this.$store.state.list.find(x => x.opend && x.selected).body
    },
    openedDocument () {
      return this.$store.state.list.filter(x => x.opend)
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

</style>
