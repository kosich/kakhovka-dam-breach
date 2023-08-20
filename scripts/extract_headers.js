/**
 * @description 
 *
 */
const fs = require('node:fs');
const path = require('node:path');


console.log('Reading article.mdx...');
let filePath = path.join(__dirname, '..', 'src', 'article.mdx');
let file = fs.readFileSync(filePath, { encoding: 'utf-8' });
console.log('Fixing URLs...');
let newContent = file.replace(/^(?!#{2,5}).*$/gm, '');
fs.writeFileSync(path.join('..', 'src', 'contents.mdx'), newContent, { encoding: 'utf-8' })
console.log('Done');