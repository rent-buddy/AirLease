import React from 'react';
import Loading from '../components/Loading';
import Listing from '../components/Listing';
import { Button } from 'react-bootstrap';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { Redirect } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  handleDelete(cartItemId) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/api/cartItems/' + cartItemId, requestOptions)
      .then(() => {
        let items = this.state.items.slice();
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === cartItemId) {
            items.splice(i, 1);
            break;
          }
        }
        return items;
      })
      .then((items) => {
        this.setState({
          items: items,
        });
      })
      .catch((err) => console.log('API ERROR: ', err));
  }
  handleQuantityChange(cartItemId, event) {
    let quantity = parseInt(event.target.value);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: quantity }),
    };
    fetch('/api/cartItems/' + cartItemId, requestOptions)
      .then(() => {
        let items = this.state.items.slice();
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === cartItemId) {
            items[i].quantity = quantity;
            break;
          }
        }
        return items;
      })
      .then((items) => {
        this.setState({
          items: items,
        });
      })
      .catch((err) => console.log('API ERROR: ', err));
  }

  componentDidMount() {
    fetch('/api/cartItems/')
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        this.setState({
          loading: false,
          items: items,
        });
      })
      .catch((err) => console.log('API ERROR: ', err));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.items.length > 0) {
      // let items = this.createItems();
      let items = this.state.items.map((itemDetails, ii) => {
        console.log(itemDetails);
        let itemId = itemDetails.itemId;
        let id = itemDetails.id;
        let quantity = itemDetails.quantity;
        let price = itemDetails.item.price;
        let name = itemDetails.item.name;
        let picture = itemDetails.item.picture;
        return (
          <CartItem
            itemId={itemId}
            handleQuantityChange={(e) => this.handleQuantityChange(id, e)}
            handleDelete={() => this.handleDelete(id)}
            quantity={quantity}
            price={price}
            name={name}
            picture={picture}
            key={ii}
          />
        );
      });
      let totalPrice = this.state.items
        .map((itemDetails) => itemDetails.quantity * itemDetails.item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
      let totalItems = this.state.items
        .map((itemDetails) => itemDetails.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
      return (
        <div className="row container-fluid text-center">
          <div className="col-10">{items}</div>
          <div className="col">
            <CartSummary totalPrice={totalPrice} totalItems={totalItems} />
          </div>
        </div>
      );
    }
    return <div>Empty</div>;
  }
}

export default Cart;
