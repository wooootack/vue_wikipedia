<template>
  <div>
    <mavon-editor
      language="ja"
      placeholder='文書を作成してください。'
      v-model="body"
      :counter="65535"
      :externalLink="mavonEditor.externalLink"
      :toolbars="mavonEditor.toolbars" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      body: '',
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
  }
}
</script>

<style scoped>

.markdown-body {
    max-height: 100%;
    height: 100%;
}

</style>
