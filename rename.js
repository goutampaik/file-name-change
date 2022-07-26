
const Path = require('path');
const { join } = Path;
const { readdirSync, renameSync } = require('fs');

const files = readdirSync('./folder');
files
    .forEach(file => {
        const filePath = join('./folder', file);
        const newFilePath = join('./folder', (file.replace(/.json/, '')));
        renameSync(filePath, newFilePath);

    });