import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';

function ClubDetail({ clubs }) {
  const { id } = useParams();
  const club = clubs.find(c => c.id === parseInt(id));

  if (!club) {
    return <div>Club not found</div>;
  }

  const renderField = (label, item) => {
    if (typeof item === 'object' && item !== null) {
      let content = [];
      if (item.name) content.push(`Name: ${item.name}`);
      if (item.person1) content.push(`Person 1: ${item.person1}`);
      if (item.person2) content.push(`Person 2: ${item.person2}`);
      return (
        <ListGroup.Item>
          <strong>{label}:</strong> {content.join(', ')}
        </ListGroup.Item>
      );
    }
    return <ListGroup.Item><strong>{label}:</strong> {item}</ListGroup.Item>;
  };

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