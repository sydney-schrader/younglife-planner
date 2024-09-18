import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

const ClubContext = createContext();

export const useClubContext = () => useContext(ClubContext);

export const ClubProvider = ({ children }) => {
  const [clubs, setClubs] = useState([]);

  const fetchClubs = useCallback(async () => {
    console.log('Fetching clubs...');
    try {
      const response = await fetch('http://localhost:3001/clubs');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched clubs:', data);
      setClubs(data);
    } catch (error) {
      console.error('Error fetching clubs:', error);
    }
  }, []);

  useEffect(() => {
    fetchClubs();
  }, [fetchClubs]);

  const addClub = async (newClub) => {
    console.log('Adding new club:', newClub);
    try {
      // Generate a new ID
      const newId = Date.now().toString();
      const clubWithId = { ...newClub, id: newId };

      const response = await fetch('http://localhost:3001/clubs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clubWithId),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const addedClub = await response.json();
      console.log('Added club:', addedClub);
      setClubs(prevClubs => [...prevClubs, addedClub]);
    } catch (error) {
      console.error('Error adding club:', error);
      throw error;
    }
  };

  return (
    <ClubContext.Provider value={{ clubs, addClub, fetchClubs }}>
      {children}
    </ClubContext.Provider>
  );
};

export default ClubProvider;