import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Listing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Listing(props) {
    return (
        <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className='center'>
                <Card.Title className='bold'>{props.name}</Card.Title>
                <Card.Text>
                {props.price}
                </Card.Text>
            </Card.Body>
        </Card>
    
    );
}

export default Listing;