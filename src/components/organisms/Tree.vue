<template>
  <div class="container">
    <Tree :data="data" :render="renderContent" @on-contextmenu="handleContextMenu" class="demo-tree-render">
      <template slot="contextMenu">
          <DropdownItem @click.native="handleContextMenuEdit">新規</DropdownItem>
          <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">削除</DropdownItem>
      </template>
    </Tree>
  </div>
</template>
<script>

export default {
  methods: {
    renderContent (h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: this.getIcon(data)
            },
            style: {
              marginRight: '0.5em'
            }
          }),
          h('span', data.title)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '2.3em'
          }
        })
      ])
    },
    append (data) {
      if (!confirm('追加しますか？')) {
        return
      }
      const children = data.children || []
      children.push({
        title: 'appended node',
        expand: true
      })
      this.$set(data, 'children', children)
    },
    remove (root, node, data) {
      if (!confirm('削除しますか？')) {
        return
      }
      const parentKey = root.find(el => el === node).parent
      const parent = root.find(el => el.nodeKey === parentKey).node
      const index = parent.children.indexOf(data)
      parent.children.splice(index, 1)
    },
    getIcon (data) {
      if (data.isFolder) {
        return 'ios-folder-outline'
      } else {
        return 'ios-paper-outline'
      }
    },
    handleContextMenu (data) {
      this.contextData = data
    },
    handleContextMenuEdit () {
      this.$Message.info('Click edit of ' + this.contextData.title)
    },
    handleContextMenuDelete () {
      this.$Message.info('Click delete of ' + this.contextData.title)
    }
  },
  computed: {
    data: function () {
      return this.$store.state.tree
    }
  }
}
</script>
<style>
  .demo-tree-render .ivu-tree-title{
      width: 100%;
  }
  .container {
    height: 100%;
    user-select: none;
  }
  .menu-item {
    margin: 0 0 0.1em 0.5em;
  }
</style>
