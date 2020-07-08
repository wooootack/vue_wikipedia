<template>
  <div class="home-container">
    <div class="tabs">
      <TabItem
        v-for="item in list"
        v-bind="item" :key="item.id"
        v-model="currentId"
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
  data () {
    return {
      currentId: 1,
      list: [
        { id: 1, label: '使い方', body: '# test \n- test1' },
        { id: 2, label: '開発環境', body: '# test \n- test2' },
        { id: 3, label: 'メモ', body: '# test \n- test3' }
      ]
    }
  },
  computed: {
    current () {
      return this.list.find(el => el.id === this.currentId) || {}
    },
    currentBody () {
      return this.list.find(el => el.id === this.currentId).body
    }
  },
  methods: {
    tabClose (id) {
      this.list = this.list.filter(x => x.id !== id)
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
