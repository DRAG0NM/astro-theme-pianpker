import { SKIP, visit } from 'unist-util-visit'

export function rehypeHeadingAnchor() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (['h1', 'h2', 'h3', 'h4'].includes(node.tagName) && node.properties?.id) {
        // Extract heading text
        let headingText = ''
        visit(node, 'text', (textNode) => {
          headingText += textNode.value
        })

        // Create anchor link
        node.children.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: `#${node.properties.id}`,
            className: ['heading-anchor-link'],
            ariaLabel: headingText
              ? `Link to ${headingText.replace(/["']/g, char => char === '"' ? '&quot;' : '&#39;')}`
              : undefined,
          },
          children: [{
            type: 'element',
            tagName: 'svg',
            properties: {
              'viewBox': '0 0 24 24',
              'aria-hidden': 'true',
              'fill': 'currentColor',
            },
            children: [
              {
                type: 'element',
                tagName: 'path',
                properties: {
                  d: 'M2.6 21.4c2 2 5.9 2.9 8.9 0l3.5-3.5-1-1-3.5 3.5c-1.4 1.4-4.2 1.9-6.4-.3s-1.8-5-.3-6.4l3.5-3.5-1-1-3.5 3.5c-3 3-2 6.9 0 8.9ZM21.4 2.6c2 2 2.9 5.9 0 8.9L17.9 15l-1-1 3.5-3.5c1.4-1.4 1.9-4.2-.3-6.4s-5-1.8-6.4-.3l-3.5 3.5-1-1 3.5-3.5c3-3 6.9-2 8.9 0Z',
                },
              },
              {
                type: 'element',
                tagName: 'path',
                properties: {
                  d: 'm8.01 14.97 6.93-6.93 1.061 1.06-6.93 6.93z',
                },
              },
            ],
          }],
        })

        return [SKIP]
      }
    })
  }
}
