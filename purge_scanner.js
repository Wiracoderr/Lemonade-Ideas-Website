const fs = require('fs');
const path = require('path');

const faRegex = /fa[srldb]?\s+fa-[a-z0-9-]+/g;
const uniqueIcons = new Set();
const filesWithIcons = new Set();

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const matches = content.match(faRegex);
            if (matches) {
                filesWithIcons.add(fullPath);
                matches.forEach(m => {
                    const iconName = m.replace(/fa[srldb]?\s+/, '').trim();
                    uniqueIcons.add(iconName);
                });
            }
        }
    }
}

walkDir('./src');
fs.writeFileSync('fa_icons_dump.json', JSON.stringify({
    count: uniqueIcons.size,
    files: Array.from(filesWithIcons),
    icons: Array.from(uniqueIcons).sort()
}, null, 2));
console.log('Dumped to fa_icons_dump.json');
