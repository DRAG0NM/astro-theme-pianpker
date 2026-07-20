import { SKIP, visit } from 'unist-util-visit'

const copyIcon = {
  type: 'element',
  tagName: 'svg',
  properties: {
    'className': ['icon-copy'],
    'viewBox': '0 0 24 24',
    'fill': 'currentColor',
    'aria-hidden': 'true',
  },
  children: [
    {
      type: 'element',
      tagName: 'path',
      properties: { d: 'M6.9.8v18h14.5V.8zm12.8 16h-11v-14h11z' },
      children: [],
    },
    {
      type: 'element',
      tagName: 'path',
      properties: { d: 'M4.3 21.2V5.6l-1.7.5v17.1h14.3l.6-2z' },
      children: [],
    },
  ],
}

const checkIcon = {
  type: 'element',
  tagName: 'svg',
  properties: {
    'className': ['icon-check'],
    'viewBox': '0 0 24 24',
    'fill': 'currentColor',
    'aria-hidden': 'true',
  },
  children: [
    {
      type: 'element',
      tagName: 'path',
      properties: { d: 'm23.1 6.4-1.3-1.3L9.4 16.6l-6.3-5.4-1.2 1.2L9.4 20z' },
      children: [],
    },
  ],
}

export function rehypeCodeCopyButton() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || node.children?.[0]?.tagName !== 'code' || !parent) {
        return
      }

      if (node._hasCopyButton) {
        return
      }

      node._hasCopyButton = true

      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-wrapper'] },
        children: [
          {
            type: 'element',
            tagName: 'button',
            properties: {
              'className': ['code-copy-button'],
              'type': 'button',
              'aria-label': 'Copy code',
            },
            children: [copyIcon, checkIcon],
          },
          node,
        ],
      }

      return SKIP
    })
  }
}
