/**
 * CSS Bundle Script
 * 
 * Combines all token CSS files and component styles into dist/style.css
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Ensure dist exists
const distDir = resolve(root, 'dist');
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Token files in order (foundational first)
const tokenFiles = [
  'src/tokens/size.css',
  'src/tokens/colors.css',
  'src/tokens/spacing.css',
  'src/tokens/shape.css',
  'src/tokens/elevation.css',
  'src/tokens/motion.css',
  'src/tokens/typography.css',
  'src/tokens/states.css',
  'src/tokens/components.css',
];

/**
 * Recursively find all CSS files in a directory
 */
function findCSSFiles(dir, files = []) {
  if (!existsSync(dir)) return files;
  
  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      findCSSFiles(fullPath, files);
    } else if (item.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Find all component CSS files
const componentsDir = resolve(root, 'src/components');
const componentFiles = findCSSFiles(componentsDir);

// Bundle tokens only
let tokensCSS = '/* @tech-devs/ui - Design Tokens */\n\n';
for (const file of tokenFiles) {
  const path = resolve(root, file);
  if (existsSync(path)) {
    tokensCSS += `/* ${file} */\n`;
    tokensCSS += readFileSync(path, 'utf-8');
    tokensCSS += '\n\n';
  }
}
writeFileSync(resolve(distDir, 'tokens.css'), tokensCSS);

// Bundle all (tokens + components)
let allCSS = tokensCSS;
allCSS += '\n/* @tech-devs/ui - Component Styles */\n\n';
for (const fullPath of componentFiles) {
  const relativePath = fullPath.replace(root + '\\', '').replace(root + '/', '');
  allCSS += `/* ${relativePath} */\n`;
  let css = readFileSync(fullPath, 'utf-8');
  allCSS += css;
  allCSS += '\n\n';
}
writeFileSync(resolve(distDir, 'style.css'), allCSS);

console.log('✓ Built dist/tokens.css');
console.log(`✓ Built dist/style.css (${componentFiles.length} component CSS files)`);

