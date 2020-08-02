<template>
  <div>

    <Header @save="save" />

    <mavon-editor
      language="ja"
      placeholder='文書を作成してください。'
      v-model="value"
      :counter="65535"
      :externalLink="mavonEditor.externalLink"
      :toolbars="mavonEditor.toolbars" />

  </div>
</template>

<script>
import Header from '@/components/organisms/Header'

export default {
  components:
  {
    Header
  },
  data () {
    return {
      value: this.$store.state.documents.find(x => x.id === Number(this.$route.params.id)).body,
      mavonEditor: {
        externalLink: {
          markdown_css: function () {
            return '/static/css/markdown/github-markdown.min.css'
          },
          hljs_js: function () {
            return '/static/js/highlightjs/highlight.min.js'
          },
          katex_css: function () {
            return '/static/css/katex/katex.min.css'
          },
          katex_js: function () {
            return '/static/js/katex/katex.min.js'
          }
        },
        // ツールバーにどのボタンを追加するか
        toolbars: {
          bold: true,
          italic: true,
          header: true,
          underline: true,
          strikethrough: true,
          mark: true,
          superscript: true,
          subscript: true,
          quote: true,
          ol: true,
          ul: true,
          link: true,
          code: true,
          table: true,
          fullscreen: true,
          readmodel: true,
          htmlcode: true,
          help: true,
          undo: true,
          redo: true,
          navigation: true,
          alignleft: true,
          aligncenter: true,
          alignright: true,
          subfield: true,
          preview: true
        }
      }
    }
  },
  methods: {
    save () {
      this.$store.commit('saveDocument', { id: Number(this.$route.params.id), body: this.value })
    }
  }
}
</script>

<style scoped>

.markdown-body {
    max-height: 100%;
    height: 100%;
}

</style>
