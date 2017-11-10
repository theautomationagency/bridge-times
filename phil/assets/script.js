const {
  Button,
  Grid,
  Container,
  Dropdown,
  Divider,
  Form,
  Header,
  Icon,
  Message,
} = semanticUIReact

const times = [];
for (var i=0; i<24; i++) {
    times[i] = {
        key: i,
        value: i,
        text: ("0" + i).slice(-2) + ":00"
    };
}

class App extends React.Component {
  render() {
    return (
    <Container>
      <Grid>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Header centered as='h2'>
              Let me know when Tower Bridge will be raised&hellip;
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Header centered as='h3'>
              On these days&hellip;
            </Header>
            <Button size='tiny'>
              MON
            </Button>
            <Button size='tiny'>
              TUE
            </Button>
            <Button size='tiny'>
              WED
            </Button>
            <Button size='tiny'>
              THU
            </Button>
            <Button size='tiny'>
              FRI
            </Button>
            <Button size='tiny'>
              SAT
            </Button>
            <Button size='tiny'>
              SUN
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
          <Header centered as='h3'>
              Between these times&hellip;
          </Header>
          <Grid columns={2}>
            <Grid.Row >
              <Grid.Column>
                <Dropdown placeholder='Select Times' fluid search selection options={times} />
              </Grid.Column>
              <Grid.Column>
                <Dropdown placeholder='Select Times' fluid search selection options={times} />
              </Grid.Column>
             </Grid.Row>
            </Grid>
          </Grid.Column>
         </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
          <Header centered as='h3'>
              and these times
          </Header>
          <Grid columns={2}>
            <Grid.Row >
              <Grid.Column>
                <Dropdown placeholder='Select Times' fluid search selection options={times} />
              </Grid.Column>
              <Grid.Column>
                <Dropdown placeholder='Select Times' fluid search selection options={times} />
              </Grid.Column>
             </Grid.Row>
            </Grid>
          </Grid.Column>
         </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

// ----------------------------------------
// Render
// ----------------------------------------
const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

ReactDOM.render(<App />, mountNode)
