const https = require('https');

function getSpeed(url, strategy) {
    const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=${strategy}`;
    console.log(`Fetching ${strategy} data...`);
    https.get(api, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const parsed = JSON.parse(data);
                if (parsed.error) {
                    console.error("Error from API:", parsed.error.message);
                    return;
                }
                const score = parsed.lighthouseResult.categories.performance.score * 100;
                console.log(`\n\n--- ${strategy.toUpperCase()} SCORE: ${score} ---`);

                const audits = parsed.lighthouseResult.audits;
                const metrics = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'];

                console.log("\nCore Metrics:");
                metrics.forEach(m => {
                    if (audits[m]) console.log(`- ${audits[m].title}: ${audits[m].displayValue}`);
                });

                console.log("\nOpportunities to Improve (Things that are slowing it down):");
                Object.values(audits)
                    .filter(a => a.details && a.details.type === 'opportunity' && a.score !== null && a.score < 0.9)
                    .forEach(a => console.log(`- ${a.title} (${a.displayValue})`));

                console.log("\nDiagnostics:");
                Object.values(audits)
                    .filter(a => a.details && a.details.type !== 'opportunity' && a.score !== null && a.score <= 0.8 && a.weight > 0)
                    .forEach(a => console.log(`- ${a.title} (${a.displayValue})`));

            } catch (e) {
                console.error("Parse error:", e);
            }
        });
    }).on('error', e => console.error("Request error:", e));
}

getSpeed('https://lemonade-ideas-website.vercel.app/', 'mobile');
getSpeed('https://lemonade-ideas-website.vercel.app/', 'desktop');
