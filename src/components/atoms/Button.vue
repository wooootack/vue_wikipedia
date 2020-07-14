<template>
  <router-link to="" @click.native="click()" class="btn-border">{{ text }}</router-link>
</template>

<script>
export default {

  props: {
    text: String
  },

  methods: {
    click () {
      this.$emit('click-event')
    }
  }
}
</script>

<style scoped>

.btn-border {
  display: inline-block;
  max-width: 180px;
  text-align: left;
  border: 0.1em solid #9ec34b;
  font-size: 0.7em;
  color: #9ec34b;
  text-decoration: none;
  padding: 0.7em 2em;
  border-radius: 0.6em;
  transition: 0.2s;
}

.btn-border:hover {
  background-color: #9ec34b;
  border-color: #cbe585;
  color: #FFF;
}

</style>
