import React from 'react';
import Card from 'react-bootstrap/Card';
import './Listing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Listing(props) {
    return (
        <Card className="col-4 border-0" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.picture} />
            <Card.Body className="center">
                <Card.Title> <b>{props.name}</b>,  <span>$</span>{props.price}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <a href="#" className="btn btn-primary">
                  Link to Listing
                </a>
            </Card.Body>
        </Card>
    );
}

export default Listing;
