<template>
  <div class="tree-container">

    <div class="button-container">
      <Button class="button" text="新規作成" name="New" />
      <!-- <Button class="button" text="トップ" name="Home" /> -->
      <!-- <Button class="button" text="詳細" name="Show" /> -->
    </div>

    <div class="search-container">
      <Input class="search-input" v-model='keyword' placeholder='キーワード' />
    </div>

    <p v-for="item in openedDocument"
        v-bind="item" :key="item.id" class="document-title" @click="open(item.id)">{{ item.title }}</p>

  </div>
</template>

<script>
import Input from '@/components/atoms/Input.vue'
import Button from '@/components/atoms/Button.vue'

export default {
  data: function () {
    return {
      keyword: ''
    }
  },
  components: {
    Input,
    Button
  },
  computed: {
    openedDocument () {
      return this.$store.state.list
    }
  },
  methods: {
    open (id) {
      this.$store.commit('openDocument', id)
    }
  }
}
</script>

<style scoped>

.tree-container {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  justify-content: space-around;
}

.search-input {
  width: 95%;
  display: inline-flex;
}

.button {
  display: inline-flex;
}

.document-title {
  margin: 0;
  cursor: pointer;
}

.document-title:hover {
  text-decoration: underline;
}

</style>
