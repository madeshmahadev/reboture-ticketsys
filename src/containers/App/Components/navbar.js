import React, { Component } from 'react'
import { Placeholder, Header, Icon, Button, Input, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          <Header as='h2'>Reboture</Header>
        </Menu.Item>

        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          <Header as='h3'>GGSH Support Center</Header>
        </Menu.Item>


        <Menu.Menu position='right'>

          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
           <Button primary><Icon name='left arrow' /> Go Back</Button>
          </Menu.Item>

          <Menu.Item
            name='help'
            active={activeItem === 'help'}
            onClick={this.handleItemClick}
          >
              <Button>Help <Icon fitted name='question circle' /></Button>

          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}