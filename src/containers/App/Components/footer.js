
import { Grid, List, Container, Header, Segment } from 'semantic-ui-react'

function Footer() {
    return (
      <>
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

      </>
    );
  }
  
  export default Footer;