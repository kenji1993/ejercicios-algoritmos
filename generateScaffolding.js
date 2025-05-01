const fs = require('fs');
const path = require('path');

const input = process.argv[2]; // Ej: "06-some-exercise"
if (!input) {
  console.error('❌ Debes pasar el nombre de la carpeta. Ej: node generateScaffold.js 06-ejercicio');
  process.exit(1);
}

const basePath = path.join(__dirname, 'src');
const folderPath = path.join(basePath, input);
const parts = input.split('-');
const name = parts.slice(1).join('-');

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`✔ Carpeta creada: ${folderPath}`);
}

const mainFile = path.join(folderPath, `${name}.js`);
const testFolder = path.join(folderPath, '__tests__');
const testFile = path.join(testFolder, `${name}.test.js`);

if (!fs.existsSync(mainFile)) {
  fs.writeFileSync(mainFile, '', 'utf8');
  console.log(`✔ Archivo creado: ${mainFile}`);
}

if (!fs.existsSync(testFolder)) {
  fs.mkdirSync(testFolder);
  console.log(`✔ Carpeta de tests creada: ${testFolder}`);
}

if (!fs.existsSync(testFile)) {
  fs.writeFileSync(testFile, '', 'utf8');
  console.log(`✔ Archivo de test creado: ${testFile}`);
}