import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'



const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})



const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='GGSH Support Center'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='A Cloud based helpdesk support with all smart automations to get your concerns solved quickly.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge' as="a" href="/client/login" style={{ marginTop: mobile ? '0.5em' : '1.5em'}}>
      Log In
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })


  render() {
    const { children } = this.props
    const { fixed } = this.state


    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>

                <Menu.Item as='h2' style={{marginBottom:"0px", fontWeight: "800"}}>Reboture  
                </Menu.Item>
                
                <Menu.Item as='h2' style={{margin:"0"}}>GGSH Support Center</Menu.Item>

                <Menu.Item position='right'>
                  <Button as='a' primary={fixed} inverted={!fixed}>
                    Log In <Icon name='right arrow' />
                  </Button>
                  <Button as='a' inverted={!fixed}  style={{ marginLeft: '0.5em' }}>
                    Help <Icon fitted name='question circle' />
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>

            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state


    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Contact</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                  <Button as='a' primary>
                    Log In <Icon name='right arrow' />
                  </Button>
                  <Button as='a'  style={{ marginLeft: '0.5em' }}>
                    Help <Icon fitted name='question circle' />
                  </Button>
                </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
                About GGSH & CO. LLP
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            GGSH & Co. LLP is an Audit and Consultation Firm rendering comprehensive professional services to Corporates, Business owners,  Start Ups, which comprises Independent Audit & Assurance, GST advisory, Business set up in India, Business valuation, Business process re engineering, Management consultancy, Financial process automation, Business metrics analysis, Foreign Exchange and Regulatory Consulting, Accounting Support,  Legal and Secretarial Support etc
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Mission & Vision
            </Header>
            <p style={{ fontSize: '1.33em' }}>
             We are here to optimally utilize the technology in continuously striving to improve the quality of delivery that adds value to the Clients’ business  ensuring the timelines.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://ggsh.in/wp-content/uploads/thegem-logos/logo_1e3a613605ef9d7daa77f8e411fc851e_1x.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button as="a" size='huge' href="https://ggsh.in/">Check Website</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Sitemap' />
              <List link inverted>
                <List.Item as='a'>Home</List.Item>
                <List.Item as='a'>About</List.Item>
                <List.Item as='a'>Services</List.Item>
                <List.Item as='a'>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                About Reboture
              </Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout