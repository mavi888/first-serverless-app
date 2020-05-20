import React, { useState } from 'react';
import './App.css';

import awsConfig from './aws-config';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [name, setName] = useState("");

  const wasGreeted = async () => {
    console.log(name);

    const response = await fetch(`${awsConfig.endpoint}hello?name=${name}`, {
      mode: 'cors'
    });
    
    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);  
  };

  const greet = async () => {
    await fetch(`${awsConfig.endpoint}hello?name=${name}`, {
      method: 'POST',
      mode: 'cors'
    });

    setShowResult(true);
    setApiMessage(`Hola ${name}`); 

  }

  const handleChange = (e) => {  
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Greeter</h1>
        <input type="text"  onChange={handleChange}/>
        <button onClick={wasGreeted}>Was greeted?</button>
        <button onClick={greet}>Greet</button>
        <div>
          {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
        </div>
      </header>
    </div>
  );
}

export default App;