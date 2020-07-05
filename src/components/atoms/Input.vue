<template>
  <input :value='value' @input="$emit('input', $event.target.value)" type="text" :placeholder='placeholder'>
</template>

<script>
export default {
  props:
  [
    'value',
    'placeholder'
  ]
}
</script>

<style scoped>

input[type=text] {
  font-size: 0.8em;
  margin: 0.5em 0;
  padding: 0.7em 0.5em;
  border: 0.1em solid #eeeeee;
  border-radius: 0.3em;
  outline: none;
}

input[type=text]:focus {
  border: solid 0.1em #9ec34b;
}

</style>
