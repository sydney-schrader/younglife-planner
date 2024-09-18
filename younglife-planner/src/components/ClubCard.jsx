import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ClubCard({ club }) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{club.theme}</Card.Title>
        <Card.Text>Date: {club.date}</Card.Text>
        <Link to={`/club/${club.theme}`}> 
          <Button variant="outline-primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ClubCard;