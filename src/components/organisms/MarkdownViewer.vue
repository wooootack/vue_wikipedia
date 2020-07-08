<template>
  <span class="markdown-body" v-html="compiledMarkdownBody"></span>
</template>

<script>
import marked from 'marked'

export default {

  props: {
    body: String
  },
  computed: {
    compiledMarkdownBody: function () {
      return marked(this.body)
    }
  }
}
</script>

<style scoped>

</style>
