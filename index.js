import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { generate, parse } from 'css-tree';

// Read the contents of the CSS files
const __dirname = dirname(fileURLToPath(import.meta.url));
const examples = [
  readFileSync(resolve(__dirname, 'relative-1.css'), 'utf8'),
  readFileSync(resolve(__dirname, 'relative-2.css'), 'utf8'),
];

for (const example of Object.values(examples)) {
  try {
    // parse CSS to AST
    const ast = parse(example);
    // generate CSS from AST
    console.log(generate(ast));
  } catch (error) {
    console.error(error.message);
  }
}
