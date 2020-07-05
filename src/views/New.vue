<template>
  <div class="new-container">
    <div class="input-container">
      <Input class="title-input" v-model='keyword' placeholder='タイトル' />
      <Input class="path-input" v-model='keyword' placeholder='階層' />
    </div>

    <MarkdownEditor class="editor-box" />

  </div>
</template>

<script>
import Input from '@/components/atoms/Input.vue'
import MarkdownEditor from '@/components/organisms/MarkdownEditor.vue'

export default {
  components: {
    MarkdownEditor,
    Input
  }
}
</script>

<style scoped>

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
