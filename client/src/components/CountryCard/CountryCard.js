import React, { Component } from 'react';
import { Collapse, Card, Button, CardTitle, CardBody, CardText } from 'reactstrap';
import API from "../../utils/API";
import { List, ListItem } from "../List";
import "./CountryCard.css";


class CountryCard extends Component {
  state = {
    countries: []
  }
  
  componentDidMount() {
    this.loadCountries();
  }
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  loadCountries = () => {
    API.getLocs()
      .then(res =>
        this.setState({ countries: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Card className= "stateCard" body outline color="primary">
        <CardTitle>Countries You've Visited</CardTitle>
        <CardText className= "number" >5</CardText>
        <Button color="secondary" className= "toggle" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Expand List</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>

            {this.state && this.state.countries && 
              <List>
                {this.state.countries.map(loc => (
                  <ListItem key={loc._id}>
                  
                      <strong>
                        {loc.country} 
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
  }}

export default CountryCard;