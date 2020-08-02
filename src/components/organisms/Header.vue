<template>
    <header>
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
