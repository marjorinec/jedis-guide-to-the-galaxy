import React from 'react';
import Planet from './Planet';
import axios from 'axios';
import './App.css'
import { Row, Col, Container } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  async componentDidMount() {
    await this.getPlanetCount()
    this.randomPlanets()
  }
  
  async getPlanetCount() {
    const planetsData = await axios.get("https://swapi.co/api/planets/")
    this.setState({planetCount: planetsData.data.count})
  }

  randomPlanets() {
    let planetId = Math.ceil(Math.random() * this.state.planetCount)
    this.setState({planetId: planetId})
	}	

  render() {
    return (
      <section>        
        <header>
          <Row>
            <Container>
              <h1>Jedi's Guide to the Galaxy</h1>
            </Container>
          </Row>
        </header>
        
      <Container className="app">
        <Planet id={this.state.planetId}/>
        <button onClick={this.randomPlanets.bind(this)}>Oi</button>
      </Container>
      </section>
    )
  }
}

export default App;