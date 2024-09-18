import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import { useClubContext } from './ClubContext';

function ClubDetail() {
  const { id } = useParams();
  const { clubs } = useClubContext();
  const [club, setClub] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('ID from URL:', id);
    console.log('Clubs from context:', clubs);
    
    const fetchedClub = clubs.find(c => c.id === id);
    
    console.log('Fetched club:', fetchedClub);

    if (fetchedClub) {
      setClub(fetchedClub);
    } else {
      setError('Club not found');
    }
  }, [clubs, id]);

  const renderField = (label, item) => {
    if (typeof item === 'object' && item !== null) {
      let content = [];
      if (item.name) content.push(`${item.name}`);
      if (item.person1) content.push(`${item.person1}`);
      if (item.person2) content.push(`${item.person2}`);
      return (
        <ListGroup.Item>
          <strong>{label}:</strong> {content.join(', ')}
        </ListGroup.Item>
      );
    }
    return <ListGroup.Item><strong>{label}:</strong> {item}</ListGroup.Item>;
  };

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
        <Link to="/club">
          <Button variant="primary">Back to Clubs</Button>
        </Link>
      </Container>
    );
  }

  if (!club) {
    return (
      <Container className="mt-4">
        <Alert variant="info">Loading...</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{club.theme}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Date: {club.date}</Card.Subtitle>
          <ListGroup variant="flush">
            {renderField("Song 1", club.song1)}
            {renderField("Mixer", club.mixer)}
            {renderField("Announcements", club.announcements)}
            {renderField("Skit", club.skit)}
            {renderField("Game", club.game)}
            {renderField("Raffle", club.raffle)}
            {renderField("Lungbleeder", club.lungbleeder)}
            {renderField("Content Song", club.contentSong)}
            {renderField("Talk", club.talk)}
            {renderField("Slides", club.slides)}
          </ListGroup>
          <Link to="/club">
            <Button variant="primary" className="mt-3">Back to Clubs</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ClubDetail;