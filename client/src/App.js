import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Hero from "./components/Hero";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import StateCard from "./components/StateCard"
import CountryCard from "./components/CountryCard";
import AddModal from "./components/Modal";
import TheMap from "./components/TheMap";
import "./App.css";



const pStyle = {
  fontSize: '22px',
  textAlign: 'justify',
  fontFamily: 'Arimo'
};
const h1Style = {
  fontSize: '55px',
  textAlign: 'center',
  letterSpacing: '2px',
  textShadow: '1px 1px 1px black'
};

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {

    const { isAuthenticated } = this.props.auth;
    // const {bsStyle} = this.props;

    return (
      <div>
        {
          !isAuthenticated() && (
            <div>
              
              <Hero backgroundImage="assets/images/earth.jpeg">

                <h1 style={h1Style}>Globe Trotters</h1>
                <Button 
     
                id="qsLoginBtn"
                bsStyle="secondary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
                  </Button>
              </Hero>
              
              <Container style={{ marginTop: 50 }}>
                <Row>
                  <Col size="md-12">
                    <h1 >About Us</h1>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12">
                    <p style={pStyle}>
                    The Globe Trotter app allows you to track every place you’ve visited with pins on a map and total up the number of states and the number of countries you’ve visited. This allows you to meet your travel goals and compete with your friends! You can also save notes at different locations to remember your favorite shops/restaurants or whatever memories you wish to note!
            </p>
            {/* <img src="./public/assets/images/globe-app-SS.png" /> */}
                  </Col>
                </Row>
              </Container>
            </div>

          )

        }
        {
          isAuthenticated() && (
            <div>
              
              <Hero backgroundImage="assets/images/earth.jpeg">
                <h1>Globe Trotters</h1>
                <Button
                id="qsLogoutBtn"
                bsStyle="secondary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
              >
                Log Out
                  </Button>
                  <AddModal />
              </Hero>
              <Container style={{ marginTop: 50 }}>
                <Row>
                  <Col size="md-12">
                    <h1>Welcome, Jenn!</h1>
                    <br />
                  </Col>
                </Row>

                <Row className="row justify-content-between">
                  <Col size="md-5">
                    <StateCard />
                  </Col>

                  <Col size="md-5">
                    <CountryCard />
                  </Col>

                </Row>
              <br />
              <br />
                <Row >
                <Col size="md-12">
                <TheMap />
                </Col>
                </Row>
              </Container>
            </div>

          )
        }

      </div>
    );
  }
}

export default App;
