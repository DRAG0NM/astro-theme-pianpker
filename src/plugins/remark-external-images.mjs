import { visit } from 'unist-util-visit'

export function remarkExternalImages() {
  return (tree) => {
    visit(tree, 'image', (node, index, parent) => {
      if (!parent || index == null || !/^https?:\/\//i.test(node.url)) {
        return
      }

      parent.children[index] = {
        type: 'externalImage',
        data: {
          hName: 'img',
          hProperties: {
            src: node.url,
            alt: node.alt ?? '',
            ...(node.title ? { title: node.title } : {}),
          },
        },
      }
    })
  }
}
