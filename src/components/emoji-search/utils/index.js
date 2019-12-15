import emojiList from '../../../assets/emojiList.json';

const indexed = emojiList.map((emoji, index) => ({ index, ...emoji }));

export const checkEmoji = (emoji, term) => `${emoji.title} ${emoji.keywords}`.toUpperCase().includes(term.toUpperCase());
export const searchEmojis = (term, limit=10) => indexed.filter(emoji => checkEmoji(emoji, term)).slice(0, limit);
