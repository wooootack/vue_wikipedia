<template>
  <div class="tree-container">

    <div class="button-container">
      <Button class="button" text="新規作成" name="New" />
      <Button class="button" text="トップ" name="Home" />
      <Button class="button" text="詳細" name="Show" />
    </div>

    <div class="search-container">
      <Input class="search-input" v-model='keyword' placeholder='キーワード' />
    </div>

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

</style>
