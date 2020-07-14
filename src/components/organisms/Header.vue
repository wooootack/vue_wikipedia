<template>
    <header>
      <Button text="新規" @click-event="clickNew"/>
      <Button text="編集" @click-event="clickEdit"/>
      <Button text="削除" @click-event="clickDelete"/>
      <Button text="保存" @click-event="clickSave"/>
      <Button text="戻る" @click-event="clickReturn"/>
    </header>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {

  components: {
    Button
  },

  methods: {
    clickNew () {
      this.$store.commit('modeChange', true)
    },
    clickEdit () {
      this.$store.commit('modeChange', true)
    },
    clickDelete () {
      console.log('delete')
    },
    clickSave () {
      console.log('save')
    },
    clickReturn () {
      this.$store.commit('modeChange', false)
    }
  }

}
</script>

<style scoped>

</style>
