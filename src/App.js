import React from 'react';
import Dictionary from './Dictionary.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="pop art" />
        </main>
        <footer>
          <a
            href="https://github.com/lenaMarilena/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{' '}
          by Olena Ovcharenko
        </footer>
      </div>
    </div>
  );
}

export default App;