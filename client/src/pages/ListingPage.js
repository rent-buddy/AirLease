import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
// import { Button, Col, Row, Image } from 'react-bootstrap';
import '../styles/ListingPageStyle.css';


class ListingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  state = {
    listing: {}
  }
  componentDidMount() {
    const { id } = this.props.match.params;  // Not sure how this works
    fetch("/api/items/" + id)
        .then(res => res.json())
        .then(listing => {
          console.log(listing);
          this.setState({
            listing
          })
        })
  }

  onAddToCart() {
    console.log(this.state.listing);
    fetch("/api/cartItems/" + this.state.listing.id, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity: 1 }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => {
        console.log("Error:" + err);
      })
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="row no-gutters">
            <aside className="col-md-6">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <a href="#"><img src={this.state.listing.picture}/></a>
                </div>
              </article>
            </aside>
            <main className="col-md-6 border-left">
              <article className="content-body">

                <h2 className="title">{this.state.listing.name}</h2>

                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li className="stars-active">
                      <img src="../images/icons/stars-active.svg" alt="" />
                    </li>
                    <li>
                      <img src="../images/icons/starts-disable.svg" alt="" />
                    </li>
                  </ul>
                  <small className="label-rating text-muted">0 reviews</small>
                </div>
                <div className="mb-3">
                  <var className="price h4">${this.state.listing.price}</var>
                  <span className="text-muted">/per item</span>
                </div>
                <p>{this.state.listing.description}</p>
                <dl className="row">
                  <dt className="col-sm-6">Delivery</dt>
                  <dd className="col-sm-6">USA</dd>
                </dl>
                <hr />
                  <div className="row">
                    <div className="form-group col-md flex-grow-0">
                      <label>Quantity</label>
                        <input type="text" className="form-control" value="1"/>
                    </div>
                  </div>
                  <a href="#" className="btn  btn-primary" onClick={this.onAddToCart}> <span className="text">Add to cart </span>
                    <FaCartPlus /> </a>
              </article>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingPage;