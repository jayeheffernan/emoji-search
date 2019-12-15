import React from 'react';
import SearchInput from '../search-input';
import EmojiResults from '../emoji-results';

const EmojiSearch = ({ searchTerm, filteredEmojis, onSearchTermChange, limit, onSearchSubmit }) => (
  <div className="EmojiSearch">
    <SearchInput value={searchTerm} onChange={onSearchTermChange} onSubmit={onSearchSubmit} />
    <EmojiResults emojis={filteredEmojis} searchTerm={searchTerm} />
  </div>
);

export default EmojiSearch;
