import React from 'react';
import PropTypes from 'prop-types';
import EmojiResultRow from './emoji-results-row';

const EmojiResults = ({emojis, searchTerm}) => {
  return (
    <div className="EmojiResults row">
      {emojis.map(emoji => (
        <EmojiResultRow key={emoji.index} emoji={emoji.symbol} title={emoji.title} keywords={emoji.keywords} searchTerm={searchTerm}/>
      ))}
    </div>
  );
};

EmojiResults.propTypes = {
  emojis: PropTypes.array,
};

EmojiResults.defaultProps = {
  emojis: [],
};

export default EmojiResults;
