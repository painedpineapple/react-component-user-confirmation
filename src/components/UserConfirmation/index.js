import React from 'react'
//
import Container from './index.style'
import Button from '../Button'
import Modal from '../Modal'

export default class DeleteConfirmation extends React.Component<{
  children: any,
  options: {
    active: boolean,
    title: string,
    styles?: {},
    buttonStyles: {
      primary: {},
      secondary: {},
    },
  },
}> {
  state = {
    confirm: undefined,
  }
  setYes = () => {
    this.props.children(true)
  }
  setNo = () => {
    this.props.children(false)
  }
  render() {
    const {
      options: { active, title, buttonStyles, ...options },
      ...props
    } = this.props
    return active ? (
      <Modal>
        <Container
          className="delete-model"
          options={{
            ...options,
            styles: {
              ...(options && options.styles ? options.styles : {}),
            },
          }}
        >
          <h3>{title}</h3>
          <div className="btn-group">
            <Button
              onClick={this.setYes}
              options={{
                tagType: 'button',
                ...buttonStyles.primary,
              }}
            >
              Yes
            </Button>
            <Button
              onClick={this.setNo}
              options={{
                tagType: 'button',
                ...buttonStyles.secondary,
              }}
            >
              No
            </Button>
          </div>
        </Container>
      </Modal>
    ) : null
  }
}
