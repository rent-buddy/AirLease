import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CartItem(props) {
  let dropDownValues = [];
  for (let i = 1; i <= 20; i++) {
    let option =
      i === props.quantity ? (
        <option value={i} selected>
          {i}
        </option>
      ) : (
        <option value={i}>{i}</option>
      );
    dropDownValues.push(option);
  }
  let dropDownMenu = <select onChange={props.handleQuantityChange}>{dropDownValues}</select>;
  return (
    <Card style={{ marginTop: '1em', marginBottom: '1em' }}>
      <div className="row" style={{ height: '10rem' }}>
        <Link to={'/items/' + props.itemId} className="col-3" style={{ width: '100%', height: '100%' }}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            src={props.picture}
            alt="Card Item Image"
          ></img>
        </Link>
        <div className="col my-auto">
          <Link to={'/items/' + props.itemId}>
            <Card.Title>
              {' '}
              <b>{props.name}</b>, <span>$</span>
              {props.price}
            </Card.Title>
          </Link>
          <Card.Text>
            <p>
              <span>Quantity: </span>
              {dropDownMenu} <span style={{ fontSize: '1.5em', fontWeight: 'lighter' }}>|</span>
              <Link onClick={props.handleDelete}> Delete</Link>
            </p>
          </Card.Text>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
