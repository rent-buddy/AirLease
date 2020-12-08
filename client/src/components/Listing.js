import React from 'react';
import Card from 'react-bootstrap/Card';
import './Listing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Listing(props) {
  return (
    <Card className="col-4 border-0" style={{ width: '18rem', marginTop: '1em', marginBottom: '1em' }}>
      <Link to={'/items/' + props.id}>
        <Card.Img variant="top" src={props.picture} />
      </Link>
      <Card.Body className="center">
        <Link to={'/items/' + props.id}>
          <Card.Title>
            {' '}
            <b>{props.name}</b>, <span>$</span>
            {props.price}
          </Card.Title>
        </Link>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Listing;
