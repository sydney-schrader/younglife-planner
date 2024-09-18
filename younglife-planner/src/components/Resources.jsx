import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Resources() {
  const resources = {
    documents: [
      { title: "YoungLife Handbook", link: "#" },
      { title: "Safety Guidelines", link: "#" },
      { title: "Volunteer Application", link: "#" }
    ],
    videos: [
      { title: "Introduction to YoungLife", link: "#" },
      { title: "Leadership Training Series", link: "#" },
      { title: "Camp Highlights 2023", link: "#" }
    ],
    links: [
      { title: "National YoungLife Website", link: "https://www.younglife.org" },
      { title: "Regional Events Calendar", link: "#" },
      { title: "Donation Page", link: "#" }
    ],
    contactInfo: [
      { title: "Main Office", info: "(555) 123-4567" },
      { title: "Email", info: "info@younglife.org" },
      { title: "Address", info: "123 YoungLife St, City, State 12345" }
    ]
  };

  const ResourceSection = ({ title, items, isContact = false }) => (
    <Card className="mb-4">
      <Card.Header as="h5">{title}</Card.Header>
      <ListGroup variant="flush">
        {items.map((item, index) => (
          <ListGroup.Item key={index}>
            {isContact ? (
              <>
                <strong>{item.title}:</strong> {item.info}
              </>
            ) : (
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );

  return (
    <Container className="mt-4">
      <h1 className="mb-4">YoungLife Resources</h1>
      <Row>
        <Col md={6}>
          <ResourceSection title="Important Documents" items={resources.documents} />
          <ResourceSection title="Useful Links" items={resources.links} />
        </Col>
        <Col md={6}>
          <ResourceSection title="Training Videos" items={resources.videos} />
          <ResourceSection title="Contact Information" items={resources.contactInfo} isContact={true} />
        </Col>
      </Row>
    </Container>
  );
}

export default Resources;