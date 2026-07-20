import type { Preset } from 'unocss'
import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { themeConfig } from './src/config.ts'

const { light, dark } = themeConfig.color

export default defineConfig({
  safelist: [
    'bg-background',
    'bg-code-bg',
    'bg-highlight',
  ],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetTheme({
      theme: {
        dark: {
          colors: {
            ...dark,
            'hairline': 'oklch(0.25 0.003 85)',
            'code-bg': 'oklch(0.20 0.003 85)',
            'note': 'oklch(70.7% 0.165 254.624 / 0.8)', // blue-400
            'tip': 'oklch(76.5% 0.177 163.223 / 0.8)', // emerald-400
            'important': 'oklch(71.4% 0.203 305.504 / 0.8)', // purple-400
            'warning': 'oklch(82.8% 0.189 84.429 / 0.8)', // amber-400
            'caution': 'oklch(70.4% 0.191 22.216 / 0.8)', // red-400
          },
        },
      },
    }) as Preset<object>,
  ],
  theme: {
    colors: {
      ...light,
      'hairline': 'oklch(0.85 0.003 92)',
      'code-bg': 'oklch(0.93 0.003 92)',
      'note': 'oklch(48.8% 0.243 264.376 / 0.8)', // blue-700
      'tip': 'oklch(50.8% 0.118 165.612 / 0.8)', // emerald-700
      'important': 'oklch(49.6% 0.265 301.924 / 0.8)', // purple-700
      'warning': 'oklch(55.5% 0.163 48.998 / 0.8)', // amber-700
      'caution': 'oklch(50.5% 0.213 27.518 / 0.8)', // red-700
    },
    fontFamily: {
      title: ['Snell-Black', 'EarlySummer-Subset', 'EarlySummer', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      navbar: ['STIX-Italic', 'EarlySummer-Subset', 'EarlySummer', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      time: ['Snell-Bold', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      serif: ['STIX', 'EarlySummer', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
  },
  rules: [
    ['scrollbar-hidden', {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
    }],
  ],
  shortcuts: {
    'uno-desktop-column': 'fixed right-[max(5rem,calc(50vw-35rem))] w-14rem',
    'uno-decorative-line': 'mb-4.5 h-0.25 w-10 bg-hairline lg:(mb-6 w-11)',
    'uno-round-border': 'border border-secondary/5 rounded border-solid',
  },
  variants: [
    (matcher) => {
      if (!matcher.startsWith('cjk:')) {
        return matcher
      }
      return {
        matcher: matcher.slice(4),
        selector: s => `${s}:is(:lang(zh), :lang(ja), :lang(ko))`,
      }
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
