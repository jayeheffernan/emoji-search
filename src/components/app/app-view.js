import React from 'react';
import '../../bootstrap-overrides.scss';
import './app.css';
import EmojiSearch from '../emoji-search';
import Header from '../header';

function App() {
  return (
    <div className="App container-sm">
      <Header />
      <EmojiSearch />
    </div>
  );
}

export default App;
