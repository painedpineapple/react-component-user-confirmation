import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import UserConfirmation from './components/UserConfirmation'
import customStyles, { P, button } from './style'

class App extends React.Component<
  {},
  {
    confirmationActive: boolean,
  },
> {
  state = {
    confirmationActive: false,
  }
  handleDeleteRequest = () => {
    this.setState({ confirmationActive: true })
  }
  handleConfirmation = (confirmation: boolean) => {
    if (this.state.confirmationActive) {
      this.setState({
        confirmationActive: false,
      })

      if (confirmation) {
        console.log('User said:', confirmation, '\nNow do something with it...')
      }
    }
  }
  render() {
    return (
      <div>
        <UserConfirmation
          options={{
            active: this.state.confirmationActive,
            title: 'Are you sure that you want to delete this?',
            styles: customStyles,
            buttonStyles: button,
          }}
        >
          {confirmation => this.handleConfirmation(confirmation)}
        </UserConfirmation>
        <button onClick={this.handleDeleteRequest}>Delete something!</button>
        <div style={{ marginTop: 80 }}>
          {_.times(20, () => (
            <P key={faker.random.uuid()}>{faker.lorem.paragraph()}</P>
          ))}
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
