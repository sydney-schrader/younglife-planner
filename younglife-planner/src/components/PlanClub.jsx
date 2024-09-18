import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useClubContext } from './ClubContext'; // Make sure this path is correct

function PlanClub() {
  const { addClub } = useClubContext(); // Use the context hook to get addClub
  const [theme, setTheme] = useState('');
  const [date, setDate] = useState('');
  const [song1, setSong1] = useState({ name: '', person1: '', person2: '' });
  const [mixer, setMixer] = useState({ name: '' });
  const [announcements, setAnnouncements] = useState({ person1: '', person2: '' });
  const [skit, setSkit] = useState({ name: '', person1: '', person2: '' });
  const [game, setGame] = useState({ name: '' });
  const [raffle, setRaffle] = useState({ person1: '', person2: '' });
  const [lungbleeder, setLungbleeder] = useState({ name: '', person1: '', person2: '' });
  const [contentSong, setContentSong] = useState({ name: '', person1: '', person2: '' });
  const [talk, setTalk] = useState({ name: '', person1: '' });
  const [slides, setSlides] = useState({ person1: '' });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting new club...');
    const newClub = {
      theme,
      date,
      song1,
      mixer,
      announcements,
      skit,
      game,
      raffle,
      lungbleeder,
      contentSong,
      talk,
      slides
    };
    console.log('New club data:', newClub);
    try {
      await addClub(newClub);
      console.log('Club added successfully');
      navigate('/club');
    } catch (error) {
      console.error('Error adding club:', error);
    }
  };

  const renderField = (label, value, setValue, options) => (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Row>
        {options.name && (
          <Col>
            <Form.Control 
              type="text" 
              placeholder={`Enter ${label.toLowerCase()}`}
              value={value.name} 
              onChange={(e) => setValue({...value, name: e.target.value})} 
            />
          </Col>
        )}
        {options.person1 && (
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Person 1"
              value={value.person1} 
              onChange={(e) => setValue({...value, person1: e.target.value})} 
            />
          </Col>
        )}
        {options.person2 && (
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Person 2"
              value={value.person2} 
              onChange={(e) => setValue({...value, person2: e.target.value})} 
            />
          </Col>
        )}
      </Row>
    </Form.Group>
  );

  return (
    <Container className="mt-4">
      <h1>Plan a New Club</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Theme</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter theme" 
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        {renderField("Song 1", song1, setSong1, { name: true, person1: true, person2: true })}
        {renderField("Mixer", mixer, setMixer, { name: true })}
        {renderField("Announcements", announcements, setAnnouncements, { person1: true, person2: true })}
        {renderField("Skit", skit, setSkit, { name: true, person1: true, person2: true })}
        {renderField("Game", game, setGame, { name: true })}
        {renderField("Raffle", raffle, setRaffle, { person1: true, person2: true })}
        {renderField("Lungbleeder", lungbleeder, setLungbleeder, { name: true, person1: true, person2: true })}
        {renderField("Content Song", contentSong, setContentSong, { name: true, person1: true, person2: true })}
        {renderField("Talk", talk, setTalk, { name: true, person1: true })}
        {renderField("Slides", slides, setSlides, { person1: true })}
        <Button variant="primary" type="submit">
          Create Club
        </Button>
      </Form>
    </Container>
  );
}

export default PlanClub;