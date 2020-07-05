<template>
  <div class="home-container">
    <div class="tabs">
      <TabItem
        v-for="item in list"
        v-bind="item" :key="item.id"
        v-model="currentId"/>
    </div>
    <div class="contents">
      <transition>
        <section class="item" :key="currentId">
          {{ current.content }}
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import TabItem from '@/components/TabItem.vue'
export default {
  components:
  {
    TabItem
  },
  data () {
    return {
      currentId: 1,
      list: [
        { id: 1, label: '使い方', content: 'コンテンツ1' },
        { id: 2, label: '開発環境', content: 'コンテンツ2' },
        { id: 3, label: 'メモ', content: 'コンテンツ3' }
      ]
    }
  },
  computed: {
    current () {
      return this.list.find(el => el.id === this.currentId) || {}
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
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #eeeeee;
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
