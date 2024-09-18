import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Club from './components/Club';
import PlanClub from './components/PlanClub';
import ClubDetail from './components/ClubDetail';
import Calendar from './components/Calendar';
import Resources from './components/Resources';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ClubProvider } from './components/ClubContext';

function App() {
  const [clubs, setClubs] = useState([
    {
      id: 1,
      theme: 'Summer Bash',
      date: '2024-07-15',
      song1: { name: 'Summer Nights', person1: 'John', person2: 'Sarah' },
      mixer: { name: 'Beach Ball Toss' },
      announcements: { person1: 'Emma', person2: 'Tom' },
      skit: { name: 'Lifeguard Rescue', person1: 'Alex', person2: 'Olivia' },
      game: { name: 'Sandcastle Building Contest' },
      raffle: { person1: 'Chris', person2: 'Mia' },
      lungbleeder: { name: 'Surfing the Waves', person1: 'Ryan', person2: 'Emily' },
      contentSong: { name: 'Ocean of Mercy', person1: 'Anna', person2: 'David' },
      talk: { name: 'Finding Peace in the Storm', person1: 'Pastor Dave' },
      slides: { person1: 'Tech Team' }
    },
    // Add more sample clubs if needed
  ]);

  const addClub = (newClub) => {
    setClubs([...clubs, newClub]);
  };

  return (
    <ClubProvider>
      <Router>
        <div className="App">
          <NavigationBar />
          <main className="mt-4 p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/club" element={<Club clubs={clubs} />} />
              <Route path="/plan-club" element={<PlanClub addClub={addClub} />} />
              <Route path="/club/:id" element={<ClubDetail clubs={clubs} />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ClubProvider>
  );
}

export default App;