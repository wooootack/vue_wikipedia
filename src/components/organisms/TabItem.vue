
<template>
  <button @click="$emit('input', id)" :class="[active, 'tab']">
    <span class="title">{{ label }}</span>
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
  padding: 10px 10px;
}

button:hover {
  background: #eeeeee;
}

.active {
  background: #eeeeee;
}

</style>
