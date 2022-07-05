import React, { useState } from 'react';
import './App.css';

function App() {

  interface Ip {
    person: {
      name: string
      age: number
      url: string
      note?: string
    }
  }

  const [people, setPeople] = useState<Ip["person"][]>()

  return (
    <div className="App">
      <h1>Party In My Droom</h1>
      
    </div>
  );
}

export default App;
