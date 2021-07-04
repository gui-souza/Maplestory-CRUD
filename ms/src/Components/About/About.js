import { Component } from "react";

import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import euImg from '../../Images/eu.png';

import '../../Styles/About.scss';

export class About extends Component {
  render() {
    return (
      <Card>
        <Card.Img src={euImg} />
        <Card.Body>
          <Card.Title>Bem vindos 🤡🔪</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Link className="btn btn-primary" to={{pathname: "https://github.com/gui-souza"}} target="_blank">Visite o meu GitHub</Link>
        </Card.Body>
      </Card>
    )
  }
}