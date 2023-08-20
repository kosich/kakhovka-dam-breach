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

    let { id, level, title, short } = parseTitle(line);
    let idExists = Boolean(id);
    if (!idExists) {
      id = track.join('-') + '-' + nanoid();
    }

    if (previous) {
      if (previous.level >= level) {
        track.push(id);
      } else {
        track = track.slice(level - 1)
      }
    }

    console.log('id', id);
    previous = { id, level };
    if (!idExists) {
      return line + '#' + id;
    }
  })
  .join('\n')

fs.writeFileSync(path.join(appFolder, 'article.mdx'), newContent, { encoding: 'utf-8' })
console.log('Done');