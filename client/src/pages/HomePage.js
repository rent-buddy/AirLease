import React from 'react';
import { Button, Jumbotron } from "react-bootstrap";
import ListingsGroup from "../components/ListingsGroup";

function HomePage(props) {
  return (
    <div className="w-100">
      <Jumbotron>
        <h1>Airlease</h1>
        <p>
	        A description for the website.
        </p>
        <p>
          <Button variant="primary">Sign up</Button>
        </p>
      </Jumbotron>
      <ListingsGroup/>
    </div>
  );
}

export default HomePage;