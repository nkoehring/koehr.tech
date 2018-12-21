<template>
  <div class="rendered-markdown" v-html="html"></div>
</template>

<script>
import marked from 'marked'
import prism from 'prismjs'

marked.setOptions({
  pedantic: false,
  gfm: true,
  tables: false,
  breaks: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  mangle: true,
  highlight (code, lang) {
    const langDef = prism.languages[lang]
    if (!langDef) return code

    return prism.highlight(code, langDef)
  }
})

export default {
  name: 'MarkDown',
  props: {
    text: { type: String, required: true }
  },
  computed: {
    html () {
      if (!this.text) return ''
      return marked(this.text)
    }
  }
}
</script>

<style src="../assets/prism-duotone-earth.css" />
