<template>
  <div class="tree-container">
    <input v-model=keyword type="text" placeholder="キーワード">
    <small>タイトルもしくは本文に含まれる物を検索します</small>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      keyword: ''
    }
  }
}
</script>

<style scoped>

input[type=text] {
  margin-top: 1%;
  width: 95%;
  padding: 0.3em;
  border: 1px solid #1b2538;
  border-radius: 4px;
  outline: none;
}

input[type=text]:focus {
  border-color: #da3c41;
}

input[type=text]:focus + i {
  color: #da3c41;
}

</style>
