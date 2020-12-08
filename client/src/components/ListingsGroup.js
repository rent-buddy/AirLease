import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row } from "react-bootstrap";
import Listing from './Listing';

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
        <Listing {...listingContent} key={i}/>
      )}
    </Row>
  );
}

export default ListingsGroup;