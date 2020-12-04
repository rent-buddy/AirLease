import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row } from "react-bootstrap";
// todo: import { Listing } from '';

function ListingsGroup({ content, createdAt, id }) {
  const [listings, setListings] = useState([{}]);

  // todo:
  useEffect(() => {
    fetch("api/items/homepageListings")
        .then(r => r.json())
        .then(listing => {
          setListings(listing);
        })
  },[]);

  return (
    <Row className="px-2">
      {listings.map((listingContent, i) =>
        <div className="col-sm-4">
          <Card>
            <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg" alt="Card image cap" />
            <Card.Body>
              <Card.Title>{listingContent.name}</Card.Title>
              <Card.Text>{listingContent.description}</Card.Text>
              <a href="#" className="btn btn-primary">Link to Listing</a>
            </Card.Body>
          </Card>
        </div>
      )}
    </Row>
  );
}

export default ListingsGroup;