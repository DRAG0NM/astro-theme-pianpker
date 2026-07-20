import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  astro: true,
  unocss: true,
  ignores: ['src/content/**', '.local-design/**'],
  rules: {
    'e18e/prefer-static-regex': 'off',
  },
})
