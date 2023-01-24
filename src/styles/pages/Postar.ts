import { styled } from '../'

export const PostarContainer = styled('div', {
  display: 'flex',
  height: '87.2vh',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',

  margin: 'auto',

  width: '100%',
  maxWidth: '40rem',

  borderRadius: 8,
  padding: '2rem',
  backgroundColor: '$purple900',

  gap: '1.25rem',

  boxShadow: '0px 0px 37px rgba(0, 0, 0, 0.25);',

  button: {
    background: 'transparent',
    border: '2px solid $green400',
    borderRadius: 8,
    color: '$green400',
    padding: '0.5rem',

    cursor: 'pointer',

    marginTop: '8.25rem',

    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      background: '$green400',
      color: '$gray100',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,

      '&:hover': {
        background: 'transparent',
        color: '$green400',
      },
    },
  },
})

export const Field = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  fontWeight: 'Bold',

  'input, textarea': {
    padding: '0.5rem',
    resize: 'none',
    border: 'none',
    borderRadius: 4,

    '&:placeholder': {
      color: '$gray200',
      fontWeight: 'normal',
    },
  },

  textarea: {
    height: '10rem',
  },
})
