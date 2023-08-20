#!/usr/bin/env node

/**
 * @description 
 *
 */
const fs = require('node:fs');
const path = require('node:path');
const appFolder = path.join(__dirname, '..', 'src', 'app');
const { parseTitle } = require('../src/app/shared/extract_url.js');

console.log('Reading article.mdx...');
let filePath = path.join(appFolder, 'article.mdx');
let file = fs.readFileSync(filePath, { encoding: 'utf-8' });
console.log('Fixing URLs...');
let newContent = file
  .replace(/^(?!#{1,3}).*$/gm, '')
  .split('\n')
  .map(line => {
    if (!/^#{1,3}\s.*$/.test(line)) return '';
    console.log(line);
    let { id, level, short } = parseTitle(line)
    level = Math.max(level - 1, 1); // remove nesting for h1
    return ' '.repeat(level * 2) + `- [${short}](#${id})`;
  })
  .filter(line => line)
  .join('\n')
fs.writeFileSync(path.join(appFolder, 'contents.mdx'), newContent, { encoding: 'utf-8' })
console.log('Done');