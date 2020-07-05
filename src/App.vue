<template>

  <div id="app">

    <div class="tree-box">

      <Tree />

    </div>

    <div class="main-container">

      <router-view/>

    </div>

  </div>

</template>

<script>
import 'normalize.css'
import Tree from '@/views/Tree'

export default {
  name: 'App',
  components: {
    Tree
  }
}
</script>

<style>

#app {
  display: flex;
  width: 100%;
  height: 100%;
}

.tree-box {
  width: 300px;
  margin: 0 1%;
  height: 100%;
}

.main-container {
  flex: 1;
}

</style>
