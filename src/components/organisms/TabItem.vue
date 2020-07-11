
<template>
  <button :class="[active, 'tab']">
    <span @click="select(id)" class="title">{{ title }}</span>
    <span @click="close(id)" class="close">×</span>
  </button>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    value: Number
  },
  computed: {
    active () {
      return this.$store.state.list.find(x => x.selected).id === this.id ? 'active' : false
    }
  },
  methods: {
    close (id) {
      this.$emit('tabClose', id)
    },
    select (id) {
      this.$store.commit('selectDocument', id)
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
  background: #eeeeee;
}

.title {
  cursor: pointer;
}

button:hover {
  background: #FFFFFF;
}

.active {
  background: #FFFFFF;
}

.close {
  display: inline-block;
  font-weight: bold;
  margin-left: 0.5em;
  cursor: pointer;
}

</style>
