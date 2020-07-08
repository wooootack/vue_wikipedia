
<template>
  <button @click="$emit('input', id)" :class="[active, 'tab']">
    <span class="title">{{ label }}</span>
    <span @click="close(id)" class="close">×</span>
  </button>
</template>

<script>
export default {
  props: {
    id: Number,
    label: String,
    value: Number
  },
  computed: {
    active () {
      return this.value === this.id ? 'active' : false
    }
  },
  methods: {
    close (id) {
      this.$emit('tabClose', id)
    }
  }
}
</script>

<style scoped>

button:focus {
  outline:0;
}

.tab {
  border: none;
  border-radius: 10px 10px 0 0;
  background: #fff;
  color: #311d0a;
  padding: 0.5em 1em 0.5em 1em;
}

button:hover {
  background: #eeeeee;
}

.active {
  background: #eeeeee;
}

.close {
  display: inline-block;
  font-weight: bold;
  margin-left: 0.5em;
}

</style>
