#!/usr/bin/env node

/**
 * @description 
 *
 */
const fs = require('node:fs');
const path = require('node:path');
const { nanoid } = require('nanoid');
const appFolder = path.join(__dirname, '..', 'src', 'app');
const { parseTitle } = require('../src/app/shared/extract_url.js');

console.log('Reading article.mdx...');
let filePath = path.join(appFolder, 'article.mdx');
let file = fs.readFileSync(filePath, { encoding: 'utf-8' });
console.log('Fixing URLs...');

let track = [];
let previous = null;
let newContent = file
  .split('\n')
  .map(line => {
    if (!/^#{2,6}\s.*$/.test(line)) {
      return line;
    }

    let { id, level } = parseTitle(line);

    if (previous?.level >= level) {
      track = track.slice(0, level - 1);
    }

    let idExists = Boolean(id);
    id = idExists ? id : (track.join('-') + '-' + nanoid(4));

    track.push(id);
    previous = { id, level };
    if (!idExists) {
      return line + '#' + id;
    }

    return line;
  })
  .join('\n')

fs.writeFileSync(path.join(appFolder, 'article.mdx'), newContent, { encoding: 'utf-8' })
console.log('Done');