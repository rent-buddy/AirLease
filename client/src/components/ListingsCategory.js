import React, { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import Listing from './Listing';
function ListingsCategory(props) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('api/items/category/' + props.category)
      .then((r) => r.json())
      .then((listing) => {
        setListings(listing);
      });
  }, [props.category]);

  return (
    <div className="container-fluid text-center">
      <Row className="px-2">
        {listings.map((listingContent, i) => (
          <Listing {...listingContent} key={i}/>
        ))}
      </Row>
    </div>
  );
}

export default ListingsCategory;
