import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList';

function App() {
  const backgroundImageStyle = {
    backgroundImage: "url('https://www.universfreebox.com/wp-content/uploads/2022/02/SoFi-Stadium4.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="App">
        <PlayerList />
      </div>
    </div>
  );
}

export default App;
