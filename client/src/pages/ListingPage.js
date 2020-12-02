import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

class ListingPage extends React.Component {
  state = {
  	description: "desc_unset",
    image: "img_unset",
    price: -1.0,
    title: "_"
  }
  componentDidMount() {
    const { id } = this.props.match.params;  // Not sure how this works
    fetch("/api/listings/" + id)
        .then(res => res.json())
        .then(listing => {
          this.setState({
	          ...listing
          })
        })
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={6}>
            <Image src={this.props.listingImg} fluid />
          </Col>
          <Col xs={6}>
            <h2>{this.props.listingTitle}</h2>
            <p>{this.props.listingPrice}</p>
            <Button>Add to Cart</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{this.props.listingDescription}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ListingPage;