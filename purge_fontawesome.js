const fs = require('fs');
const path = require('path');

const iconMap = {
    "fa-arrow-left": "ArrowLeft",
    "fa-arrow-right": "ArrowRight",
    "fa-arrows-alt": "Maximize",
    "fa-bolt": "Zap",
    "fa-book-reader": "BookOpen",
    "fa-brain": "Brain",
    "fa-calendar-alt": "Calendar",
    "fa-calendar-check": "CalendarCheck",
    "fa-chart-line": "LineChart",
    "fa-chart-pie": "PieChart",
    "fa-check": "Check",
    "fa-check-circle": "CheckCircle",
    "fa-chevron-down": "ChevronDown",
    "fa-clipboard-check": "ClipboardCheck",
    "fa-clipboard-list": "ClipboardList",
    "fa-clock": "Clock",
    "fa-cogs": "Settings",
    "fa-credit-card": "CreditCard",
    "fa-desktop": "Monitor",
    "fa-exclamation-triangle": "AlertTriangle",
    "fa-facebook-f": "Facebook",
    "fa-file-contract": "FileText",
    "fa-file-signature": "FileSignature",
    "fa-hammer": "Hammer",
    "fa-hand-holding-usd": "CircleDollarSign",
    "fa-instagram": "Instagram",
    "fa-laptop-code": "Laptop",
    "fa-lightbulb": "Lightbulb",
    "fa-linkedin-in": "Linkedin",
    "fa-list-ul": "List",
    "fa-map-marked-alt": "MapPin",
    "fa-network-wired": "Network",
    "fa-pen-fancy": "PenTool",
    "fa-phone-alt": "Phone",
    "fa-search": "Search",
    "fa-shield-alt": "Shield",
    "fa-signal": "Signal",
    "fa-sitemap": "Sitemap",
    "fa-star": "Star",
    "fa-store": "Store",
    "fa-times": "X",
    "fa-times-circle": "XCircle",
    "fa-users": "Users",
    "fa-youtube": "Youtube"
};

const dump = JSON.parse(fs.readFileSync('fa_icons_dump.json', 'utf8'));

dump.files.forEach(filePath => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        const usedIcons = new Set();
        
        // Match <i className="... fa-icon ..."></i>
        const iTagRegex = /<i\s+className=["']([^"']*)["'][^>]*>(?:\s*|\n*|<\/i>)/g;
        
        content = content.replace(iTagRegex, (match, className) => {
            const classes = className.split(' ');
            let faIconName = null;
            let otherClasses = [];
            
            classes.forEach(c => {
                if (c.startsWith('fa-') && iconMap[c]) {
                    faIconName = c;
                } else if (c.startsWith('fa-') && c !== 'fa-ul' && c !== 'fa-li' && !c.startsWith('fa-spin')) {
                    // Try to catch any other fa- classes just in case
                    if (!c.match(/fa[srldb]/) && !iconMap[c]) {
                         if (iconMap[c]) faIconName = c;
                    }  
                } else if (!c.match(/^fa[srldb]?$/) && c !== 'fa-fw' && c !== 'fa-lg' && c !== 'fa-2x' && c !== 'fa-3x' && !c.startsWith('fa-spin')) {
                    otherClasses.push(c);
                }
            });
            
            if (faIconName && iconMap[faIconName]) {
                const lucideIcon = iconMap[faIconName];
                usedIcons.add(lucideIcon);
                const newClassName = otherClasses.join(' ').trim();
                if (newClassName) {
                    return `<${lucideIcon} className="${newClassName}" />`;
                } else {
                    return `<${lucideIcon} />`;
                }
            }
            
            return match; // return original if not recognized
        });

        // Some tags might be self closing: <i className="fas fa-check" />
        const iTagSelfClosingRegex = /<i\s+className=["']([^"']*)["']\s*\/>/g;
        content = content.replace(iTagSelfClosingRegex, (match, className) => {
            const classes = className.split(' ');
            let faIconName = null;
            let otherClasses = [];
            
            classes.forEach(c => {
                if (c.startsWith('fa-') && iconMap[c]) faIconName = c;
                else if (!c.match(/^fa[srldb]?$/) && !c.match(/^fa-[2345]x/)) otherClasses.push(c);
            });
            
            if (faIconName && iconMap[faIconName]) {
                const lucideIcon = iconMap[faIconName];
                usedIcons.add(lucideIcon);
                const newClassName = otherClasses.join(' ').trim();
                return newClassName ? `<${lucideIcon} className="${newClassName}" />` : `<${lucideIcon} />`;
            }
            return match;
        });

        if (usedIcons.size > 0 && content !== originalContent) {
            // Find last import
            const lines = content.split('\n');
            let lastImportIndex = -1;
            lines.forEach((line, index) => {
                if (line.trim().startsWith('import ')) {
                    lastImportIndex = index;
                }
            });
            
            const importStatement = `import { ${Array.from(usedIcons).join(', ')} } from 'lucide-react';`;
            
            // Check if lucide-react is already imported
            const existingLucideImport = lines.findIndex(l => l.includes("'lucide-react'") || l.includes('"lucide-react"'));
            
            if (existingLucideImport !== -1) {
                // If it already exists, replace it or assume it's fine (primitive handling: just insert new one and let linter or manual fix handle dupes, or better: merge)
                // For safety, let's just insert it at the end of imports if we can't merge easily, actually wait, React allows multiple imports from same module
                lines.splice(lastImportIndex + 1, 0, importStatement);
            } else {
                lines.splice(lastImportIndex + 1, 0, importStatement);
            }
            
            fs.writeFileSync(filePath, lines.join('\n'));
            console.log(`Updated: ${filePath}`);
        }
    } catch (e) {
        console.error(`Error on ${filePath}: ${e.message}`);
    }
});
console.log('Migration Complete.');
