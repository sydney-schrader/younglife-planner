import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClubCard from './ClubCard';
import './Club.css';

function Club({ clubs }) {
  return (
    <Container className="mt-4">
      <h1>YoungLife Clubs</h1>
      <Link to="/plan-club">
        <Button variant="primary" className="mb-4">Plan a New Club</Button>
      </Link>
      <Row>
        {clubs.map(club => (
          <Col md={4} key={club.id} className="mb-4">
            <ClubCard club={club} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Club;