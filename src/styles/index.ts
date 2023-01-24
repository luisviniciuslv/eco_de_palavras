import { createStitches } from '@stitches/react'

export const { getCssText, globalCss, theme, styled } = createStitches({
  theme: {
    colors: {
      purple500: '#A855F7',
      purple800: '#6B21A8',
      purple900: '#581C87',

      gray100: '#F3F4F6',
      gray200: '#E5E7EB',

      green400: '#4ADE80',
    },
  },
})
