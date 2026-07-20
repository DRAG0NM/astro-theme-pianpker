import { visit } from 'unist-util-visit'

export function rehypeExternalLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties?.href) {
        if (/^(?:https?:|\/\/)/.test(node.properties.href)) {
          node.properties.target = '_blank'
          node.properties.rel = ['noopener', 'noreferrer']

          // Add Umami outbound link tracking
          node.properties.dataUmamiEvent = 'outbound-link-click'
          node.properties.dataUmamiEventUrl = node.properties.href
        }
      }
    })
  }
}
