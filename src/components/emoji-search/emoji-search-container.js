import React from 'react';
import EmojiSearch from './emoji-search-view.js';
import { searchEmojis } from './utils';
import copy from 'copy-to-clipboard';

const DEFAULT_LIMIT = 100;

class EmojiSearchContainer extends React.Component {
  state = {
    filteredEmojis: searchEmojis('', DEFAULT_LIMIT),
    searchTerm: '',
    limit: DEFAULT_LIMIT,
  };

  onSearchTermChange = searchTerm => {
    const filteredEmojis = searchEmojis(searchTerm, this.state.limit);
    this.setState({ searchTerm, filteredEmojis })
  }

  onSearchSubmit = () => {
    const emoji = this.state.filteredEmojis[0];
    if (emoji) {
      copy(emoji.symbol);
    }
  }

  render() {
    return (
      <EmojiSearch
        searchTerm={this.state.searchTerm}
        onSearchTermChange={this.onSearchTermChange}
        filteredEmojis={this.state.filteredEmojis}
        onSearchSubmit={this.onSearchSubmit}
      />
    );
  }
}

export default EmojiSearchContainer;
