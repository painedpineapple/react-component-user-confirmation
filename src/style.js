import styled from 'react-emotion'

export default {}

export const P = styled('p')(() => ({
  maxWidth: '800px',
  fontSize: 18,
  margin: 30,
}))

export const color = (() => {
  const c = {
    // c for common
    white: ['255,255,255', '240, 240, 240'],
    black: ['44, 42, 41', '48, 41, 36', '97, 92, 90', '60,60,60'],
    gray: ['197, 198, 198', '173,173,173'],
    red: ['203,51,59', '178,45,52'],
    blue: ['0,114,206', '10,84,144', '0,156,222'],
  }
  return {
    ...c,
    button: c.blue[0],
    buttonHover: c.blue[1],
  }
})()

export const button = (() => {
  const c = {
    // c for common
    hoverEffect: 'default',
    textColor: color.white[0],
    inverse: false,
    inverseStyle: 'default',
    styles: {
      transition: 'color 0.5s ease, background 0.5s ease',
      fontSize: 14,
      padding: '8px 40px',
      fontWeight: 600,
      borderRadius: 3,

      '&:hover, &:focus': {
        outline: 'none',
      },
    },
  }
  return {
    primary: {
      ...c,
      baseColor: color.button,
      hoverBaseColor: color.buttonHover,
    },
    secondary: {
      ...c,
      baseColor: color.gray[0],
      hoverBaseColor: color.gray[1],
    },
  }
})()
