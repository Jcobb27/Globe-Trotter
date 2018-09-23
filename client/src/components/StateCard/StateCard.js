import React, { Component } from 'react';
import { Collapse, Card, Button, CardTitle, CardBody, CardText } from 'reactstrap';
import "./StateCard.css";

class StateCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
      <Card className= "stateCard" body outline color="primary">
        <CardTitle>States You've Visited</CardTitle>
        <CardText className= "number" >25</CardText>
        <Button color="secondary" className= "toggle" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Expand List</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit,
               enim eiusmod high life accusamus terry richardson ad squid. Nihil
               anim keffiyeh helvetica, craft beer labore wes anderson cred
               nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </Card>

    </div >
  )
  }}

  export default StateCard;