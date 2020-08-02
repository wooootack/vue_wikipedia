<template>
  <div class="new-container">

    <MarkdownEditor class="editor-box" />

  </div>

</template>

<script>
import MarkdownEditor from '@/components/organisms/MarkdownEditor.vue'

export default {
  components:
  {
    MarkdownEditor
  }
}
</script>

<style scoped>

.new-container {
  height: 100%;
}

.editor-box {
  height: 90%;
}

</style>
