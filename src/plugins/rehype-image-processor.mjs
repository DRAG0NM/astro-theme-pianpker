import { visit } from 'unist-util-visit'

function hasClass(node, className) {
  const classNames = node?.properties?.className
  if (Array.isArray(classNames)) {
    return classNames.includes(className)
  }
  if (typeof classNames === 'string') {
    return classNames.split(/\s+/).includes(className)
  }
  return false
}

function createFigure(imgNode, isInGallery = false) {
  const altText = imgNode.properties?.alt
  const shouldSkipCaption = !altText || altText.startsWith('_')
  if (shouldSkipCaption && !isInGallery) {
    return imgNode
  }

  const children = [imgNode]

  if (!shouldSkipCaption) {
    children.push({
      type: 'element',
      tagName: 'figcaption',
      properties: {},
      children: [{ type: 'text', value: altText }],
    })
  }

  return {
    type: 'element',
    tagName: 'figure',
    properties: isInGallery ? { className: ['gallery-item'] } : {},
    children,
  }
}

export function rehypeImageProcessor() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Skip non-paragraph elements, empty paragraphs, and orphaned nodes
      if (node.tagName !== 'p' || !node.children || node.children.length === 0 || !parent) {
        return
      }

      // Collect images from paragraph
      const imgNodes = []
      for (const child of node.children) {
        if (child.tagName === 'img') {
          imgNodes.push(child)
        }
        else if (child.type !== 'text' || child.value.trim() !== '') {
          return // Skip paragraphs with non-image content
        }
      }

      if (imgNodes.length === 0) {
        return
      }

      const isInGallery = hasClass(parent, 'gallery-container')

      // Gallery container: convert images to figures
      if (isInGallery) {
        const figures = imgNodes.map(imgNode => createFigure(imgNode, true))
        parent.children.splice(index, 1, ...figures)
        return
      }

      // Single image: convert to figure in non-gallery containers
      if (imgNodes.length === 1) {
        const figure = createFigure(imgNodes[0], false)
        if (figure !== imgNodes[0]) {
          // Only replace if conversion happened
          node.tagName = 'figure'
          node.properties = figure.properties
          node.children = figure.children
        }
        return
      }

      // Multiple images: unwrap in non-gallery containers
      parent.children.splice(index, 1, ...imgNodes)
    })
  }
}
