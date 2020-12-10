import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

class CreateListingPage extends React.Component {
  state = {
    name: "",
    price: "",
    category: "Clothing",
    picture: "",
    description: "",
    isDonation: false
  };

  onFormSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    fetch("/api/items/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...this.state }),
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

  donationHandler = e => {
    let inverse = !this.state.isDonation;

    this.setState({ isDonation: inverse });
  }

  render() {
    return (
    <Card style={{ width: '40rem', padding: '1rem', margin: '1rem' }}>
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}/>
          <Form.Text className="text-muted">
            This will be the title of your post.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter a price" value={this.state.price}
                        onChange={e => this.setState({ price: e.target.value })}/>
          <Form.Text className="text-muted">
            Please enter a price for your listing.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={this.state.category}
                        onChange={e => this.setState({ category: e.target.value })}>
            <option>Clothing</option>
            <option>Furniture</option>
            <option>Electronics</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formPicture">
          <Form.Label>Image URL</Form.Label>
          <Form.Control placeholder="Image link" value={this.state.picture}
                        onChange={e => this.setState({ picture: e.target.value })}/>
        </Form.Group>
        <Form.Group controlId="formDonation">
          <Form.Check type="checkbox" label="Donate my item!" value={this.state.isDonation}
                      onChange={this.donationHandler}/>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={this.state.description}
                        onChange={e => this.setState({ description: e.target.value })}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Listing
        </Button>
      </Form>
    </Card>
    )};
}

export default CreateListingPage;