import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import Navbar from '../../Components/navbar'
import Footer from '../../Components/footer'

export default class Client extends Component {

    render(){
        return(
            <>
            <Navbar />
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Image bordered rounded size='large' src='https://ggsh.in/wp-content/uploads/thegem-logos/logo_1e3a613605ef9d7daa77f8e411fc851e_1x.png' />
              <Header as='h2' color='blue' textAlign='center'>
                 Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' required/>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    required
                  />
        
                  <Button color='blue' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Contact Us</a>
              </Message>
            </Grid.Column>
          </Grid>
          <Footer />
          </>
        )
    }

}