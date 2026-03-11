const fs = require('fs');
try {
    const raw = fs.readFileSync('lh-report.json', 'utf8');
    const data = JSON.parse(raw);
    const audits = data.audits;
    for(let key in audits) {
        if(key.includes('largest-contentful-paint-element')) {
            const items = audits[key].details?.items;
            if (items && items.length > 0) {
                console.log('--- LCP HTML NODE ---');
                console.log(items[0].node.snippet);
                return;
            }
        }
    }
    console.log('Could not find largest contentful paint element.');
} catch (e) {
    console.log('Error parsing:', e.message);
}
