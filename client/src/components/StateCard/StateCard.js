import React, { Component } from 'react';
import { Collapse, Card, Button, CardTitle, CardBody, CardText } from 'reactstrap';
import API from "../../utils/API";
import { List, ListItem } from "../List";
import "./StateCard.css";

class StateCard extends Component {
  state = {
    USstates: []
  }

  componentDidMount() {
    this.loadStates();
  }


  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

 

  loadStates = () => {
    API.getLocs()
      .then(res =>
        this.setState({ USstates: res.data })
      )
      .catch(err => console.log(err));
  };


  render() {
    console.log(this.state.USstates);
    return (
      <div>
        <Card className="stateCard" body outline color="primary">
          <CardTitle>US States You've Visited</CardTitle>
          <CardText className="number" >25</CardText>
          <Button color="secondary" className="toggle" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Expand List</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
             
              {this.state && this.state.USstates && 
              <List>
                {this.state.USstates.map(loc => (
                  <ListItem key={loc._id}>
                  
                      <strong>
                        {loc.USstate} 
                      </strong>
                   
                  </ListItem>
                ))}
              </List>
              }
              </CardBody>
            </Card>
          </Collapse>
        </Card>

      </div >
        )
      }
    }
    
export default StateCard;