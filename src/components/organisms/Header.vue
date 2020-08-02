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
      this.$emit('save')
    },
    clickReturn () {
      this.$router.push('/show')
    }
  }

}
</script>

<style scoped>

</style>
