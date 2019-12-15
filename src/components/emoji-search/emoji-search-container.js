import React from 'react';
import EmojiSearch from './emoji-search-view.js';
import {searchEmojis} from './utils';
import copy from 'copy-to-clipboard';

const DEFAULT_LIMIT = 100;

class EmojiSearchContainer extends React.Component {
  state = {
    filteredEmojis: searchEmojis('', DEFAULT_LIMIT),
    searchTerm: '',
    limit: DEFAULT_LIMIT,
    selectedEmoji: null,
  };

  selectEmoji = emoji => {
    this.setState({selectedEmoji: emoji || null});
  };

  onSearchTermChange = searchTerm => {
    const filteredEmojis = searchEmojis(searchTerm, this.state.limit);
    this.selectEmoji(filteredEmojis[0]);
    this.setState({searchTerm, filteredEmojis});
  };

  onSearchSubmit = () => {
    const {selectedEmoji} = this.state;
    if (selectedEmoji) copy(selectedEmoji.symbol);
  };

  render() {
    return (
      <EmojiSearch
        searchTerm={this.state.searchTerm}
        onSearchTermChange={this.onSearchTermChange}
        filteredEmojis={this.state.filteredEmojis}
        onSearchSubmit={this.onSearchSubmit}
        selectedEmoji={this.state.selectedEmoji}
        selectEmoji={this.selectEmoji}
      />
    );
  }
}

export default EmojiSearchContainer;
