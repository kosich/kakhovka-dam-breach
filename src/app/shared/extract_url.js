const kebabCase = require('lodash/kebabCase');

/** @param {string} mdTitle */
function parseTitle(mdTitle) {
  const match = mdTitle.match(/^(#+)\s+(.*)\|?(.*)?#?(.*)?$/);
  if (!match) throw 'Not a title';
  let [_, hashes, title, short, id] = match;

  id = id || kebabCase(title);
  short = short || title;

  return {
    hashes,
    level: hashes.length,
    title,
    short,
    id,
  };
}

module.exports = { parseTitle };