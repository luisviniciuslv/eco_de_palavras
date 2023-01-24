import { styled } from '../'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1.875rem 3.75rem',

  backgroundColor: '$purple900',

  height: 120,

  boxShadow: '0px 0px 37px rgba(0, 0, 0, 0.25);',
})

export const Navigation = styled('nav', {
  display: 'flex',
  gap: '2rem',

  a: {
    display: 'flex',
    alignItems: 'center',

    gap: 2,

    color: '$gray100',
    fontSize: '2rem',
    lineWeight: '140%',
    fontWeight: 'bold',
    textDecoration: 'none',

    borderBottom: '2px solid transparent',

    svg: {
      color: '$purple500',
    },

    '&:hover': {
      transition: 'border-bottom-color 0.2s',
      borderBottomColor: '$purple500',
    },
  },
})
