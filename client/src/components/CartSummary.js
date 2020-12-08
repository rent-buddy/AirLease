import React from 'react';
import Card from 'react-bootstrap/Card';

function CartSummary(props) {
  return (
    <Card style={{ marginTop: '1em', marginBottom: '1em' }}>
      <Card.Body className="center">
        <Card.Title className="bold">Cart Summary</Card.Title>
        <Card.Text>
          Subtotal ({props.totalItems} item{props.totalItems === 1 ? '' : 's'}): ${props.totalPrice}
        </Card.Text>
        <button type="button" className="btn btn-primary btn btn-primary" style={{ backgroundColor: '#F93800' }}>
          Go to checkout
        </button>
      </Card.Body>
    </Card>
  );
}

export default CartSummary;
