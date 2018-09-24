import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Hero from "./components/Hero";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import StateCard from "./components/StateCard"
import CountryCard from "./components/CountryCard";
import AddModal from "./components/Modal";
import Map from "./components/Map";
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
    const {bsStyle} = this.props;

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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                      consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et
                      metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
                      vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
                      interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
                      efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor
                      erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non
                      nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus.
                      Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat
                      mattis tortor vitae mattis.
            </p>
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
                    <h1>Welcome, Bob!</h1>
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
                <Map />
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
