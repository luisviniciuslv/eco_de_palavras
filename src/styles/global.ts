import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    userSelect: 'none',
  },

  'body, input, textarea, button': {
    fontFamily: '"Baloo 2", sans-serif',
    fontSize: '1.5rem',
    fontWeight: 400,
  },

  body: {
    backgroundColor: '$purple800',
    color: '$gray100',
  },
})
