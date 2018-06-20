import styled from 'react-emotion'

export default styled('div')(props => ({
  width: 535,
  maxWidth: '100%',

  h3: {
    background: 'rgb(240, 240, 240)',
    padding: '13px 15px',
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 400,
    textTransform: 'none',
    letterSpacing: 'initial',
    margin: 0,
  },

  '.fields': {
    padding: 20,
  },

  '.btn-group': {
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,

    '> *': {
      margin: '0 5px',
    },
  },

  ...(props.options && props.options.styles ? props.options.styles : {}),
}))
