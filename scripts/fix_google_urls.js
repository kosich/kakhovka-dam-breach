#!/usr/bin/env node

/**
 * @description 
 * google docs export corrupts all URLs to be google-driven
 * this script fixes those urls
 */
const fs = require('node:fs');
const path = require('node:path');


console.log('Reading index.html...');
let filePath = path.join(__dirname, '..', 'index.html');
let file = fs.readFileSync(filePath, { encoding: 'utf-8' });
console.log('Fixing URLs...');
let newContent = file.replace(/href="(https:\/\/www\.google\.com\/url\?[^"]*)"/g, (_, url) => {
  let origin = new URL(url).searchParams.get('q')
  console.log(origin);
  return `href="${origin}"`
})
fs.writeFileSync(filePath, newContent, { encoding: 'utf-8' })
console.log('Done');