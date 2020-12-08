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
    <Card>
      <div className="row" style={{ height: '10rem' }}>
        <Link to={'/items/' + props.itemId} className="col-2">
          <img
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            src="https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
            alt="Card Item Image"
          ></img>
        </Link>
        <div className="col my-auto">
          <Link to={'/items/' + props.itemId}>
            <Card.Title className="bold">{props.name}</Card.Title>
          </Link>
          <Card.Text>
            <p>
              <span>$</span>
              {props.price}
            </p>
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
