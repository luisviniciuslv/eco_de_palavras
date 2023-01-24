import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  height: '87.2vh',

  padding: '5rem',
})

export const Message = styled('div', {
  margin: 'auto',

  backgroundColor: '$purple900',

  padding: '2rem',

  borderRadius: 8,

  boxShadow: '0px 0px 37px rgba(0, 0, 0, 0.25);',

  width: '100%',
  maxWidth: '50rem',
})

export const User = styled('div', {
  display: 'flex',

  alignContent: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$purple800',

  borderRadius: 8,
  padding: '0.5rem 0.75rem',
})

export const UserWrapper = styled('div', {
  display: 'flex',
  alignContent: 'center',

  gap: '0.5rem',

  img: {
    borderRadius: '50%',
  },

  strong: {
    display: 'flex',
    alignItems: 'center',
  },
})

export const Data = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'inter',
  fontWeight: 200,
  fontSize: '0.75rem',
  color: '$gray200',
})

export const MessageText = styled('div', {
  marginTop: '1.375rem',
})
