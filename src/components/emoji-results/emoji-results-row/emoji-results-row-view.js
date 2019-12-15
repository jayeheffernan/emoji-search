import React from 'react';
import PropTypes from 'prop-types';
import './emoji-results-row.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Highlighter from 'react-highlight-words';
import classnames from 'classnames';

const Highlight = ({children}) => (
  <span className="text-success">{children}</span>
);

const EmojiResultsRow = ({
  emoji,
  title,
  keywords,
  searchTerm,
  selected,
  onHover,
}) => {
  const hex = emoji.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${hex}.png`;
  return (
    <CopyToClipboard text={emoji}>
      <div
        className={classnames('EmojiResultsRow card col-6 col-sm-3 col-lg-2', {
          'bg-warning': selected,
          'bg-light': !selected,
        })}
        onMouseEnter={onHover}>
        <img src={src} alt={title} className="card-image-top emoji-image" />
        <div className="card-body">
          <h5 className="card-title emoji-title">
            <Highlighter
              caseSensitive={false}
              textToHighlight={title}
              searchWords={[searchTerm]}
              highlightTag={Highlight}
            />
          </h5>
          <p className="keywords card-text text-secondary">
            <Highlighter
              caseSensitive={false}
              textToHighlight={keywords}
              searchWords={[searchTerm]}
              highlightTag={Highlight}
            />
          </p>
        </div>
      </div>
    </CopyToClipboard>
  );
};

EmojiResultsRow.propTypes = {
  emoji: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.string,
  searchTerm: PropTypes.string,
  selected: PropTypes.bool,
};

EmojiResultsRow.defaultProps = {
  emoji: '',
  title: '',
  keywords: '',
  searchTerm: '',
  selected: false,
};

export default EmojiResultsRow;
