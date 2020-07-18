<template>
<div>
    <Tree :data="data5" :render="renderContent" class="demo-tree-render"></Tree>
    </div>
</template>
<script>
export default {
  data () {
    return {
      data5: [
        {
          title: 'documents',
          expand: true,
          render: (h, { root, node, data }) => {
            return h('span', {
              style: {
                display: 'inline-block',
                width: '100%'
              }
            }, [
              h('span', [
                h('Icon', {
                  props: {
                    type: 'ios-folder-outline'
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
          children: [
            {
              title: 'child 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  expand: true
                },
                {
                  title: 'leaf 1-1-2',
                  expand: true
                }
              ]
            },
            {
              title: 'child 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  expand: true
                },
                {
                  title: 'leaf 1-2-1',
                  expand: true
                }
              ]
            }
          ]
        }
      ]
    }
  },
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
      if (data.children === undefined || data.children.length === 0) {
        return 'ios-paper-outline'
      } else {
        return 'ios-folder-outline'
      }
    }
  }
}
</script>
<style>
    .demo-tree-render .ivu-tree-title{
        width: 100%;
    }
</style>
