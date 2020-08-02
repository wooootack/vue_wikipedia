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
import Tree from '@/components/organisms/Tree'

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
  height: 100%;
  padding: 0 1em;
  margin: 0;
  background-color: #f5f5f5;
}

.main-container {
  flex: 1;
  margin-right: 1em;
}

</style>
