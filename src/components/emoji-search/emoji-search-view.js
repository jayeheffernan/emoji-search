import React from 'react';
import SearchInput from '../search-input';
import EmojiResults from '../emoji-results';

const EmojiSearch = ({
  searchTerm,
  filteredEmojis,
  onSearchTermChange,
  limit,
  onSearchSubmit,
  selectedEmoji,
  selectEmoji,
}) => (
  <div className="EmojiSearch">
    <SearchInput
      value={searchTerm}
      onChange={onSearchTermChange}
      onSubmit={onSearchSubmit}
    />
    <EmojiResults
      emojis={filteredEmojis}
      searchTerm={searchTerm}
      selectedEmoji={selectedEmoji}
      selectEmoji={selectEmoji}
    />
  </div>
);

export default EmojiSearch;
