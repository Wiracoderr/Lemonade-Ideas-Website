import fs from 'fs';
import path from 'path';

const blogsDir = path.join(process.cwd(), 'src', 'app', 'blogs');

// New highly differentiated typography and layout classes
const newClasses = `                        className="
                            [&>h2]:text-[#1E3A1A] [&>h2]:mt-[60px] [&>h2]:mb-[25px] [&>h2]:font-extrabold [&>h2]:text-[2rem] [&>h2]:md:text-[2.5rem] [&>h2]:leading-[1.2] [&>h2]:border-b-4 [&>h2]:border-[#3AAB43] [&>h2]:pb-[15px]
                            [&>h3]:text-[#3AAB43] [&>h3]:mt-[50px] [&>h3]:mb-[20px] [&>h3]:font-bold [&>h3]:text-[1.5rem] [&>h3]:md:text-[1.8rem] [&>h3]:leading-[1.3] [&>h3]:uppercase [&>h3]:tracking-[1px]
                            [&>h4]:text-[#1E3A1A] [&>h4]:mt-[40px] [&>h4]:mb-[15px] [&>h4]:font-semibold [&>h4]:text-[1.25rem] [&>h4]:md:text-[1.5rem] [&>h4]:leading-[1.4] [&>h4]:bg-[#f0f7f0] [&>h4]:px-[20px] [&>h4]:py-[12px] [&>h4]:border-l-[5px] [&>h4]:border-[#FED52B] [&>h4]:rounded-r-[8px]
                            [&>p]:mb-[25px] [&>p]:text-justify [&>p]:text-[1.05rem] [&>p]:text-[#444] [&>p]:leading-[1.8]
                            [&>ul]:mb-[25px] [&>ul]:pl-[25px] [&>ul]:list-disc [&>ul]:text-[1.05rem] [&>ul]:text-[#444] [&>ul]:leading-[1.8] [&>ul>li]:mb-[10px]
                            [&>ol]:mb-[25px] [&>ol]:pl-[25px] [&>ol]:list-decimal [&>ol]:text-[1.05rem] [&>ol]:text-[#444] [&>ol]:leading-[1.8] [&>ol>li]:mb-[10px]
                            [&_strong]:text-[#1E3A1A] [&_strong]:font-bold
                            [&>img]:w-full [&>img]:block [&>img]:h-auto [&>img]:rounded-[12px] [&>img]:my-[45px] [&>img]:shadow-[0_10px_25px_rgba(0,0,0,0.12)] 
                            [&>div.geo-capsule]:bg-[#f9fff9] [&>div.geo-capsule]:border-l-[5px] [&>div.geo-capsule]:border-[#3AAB43] [&>div.geo-capsule]:p-[25px] [&>div.geo-capsule]:mb-[35px] [&>div.geo-capsule]:rounded-r-[12px] [&>div.geo-capsule]:shadow-sm
                        "`;

try {
    const items = fs.readdirSync(blogsDir);
    let updatedCount = 0;

    for (const item of items) {
        const itemPath = path.join(blogsDir, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
            const pagePath = path.join(itemPath, 'page.tsx');
            if (fs.existsSync(pagePath)) {
                let content = fs.readFileSync(pagePath, 'utf8');
                
                // 1. Update the article wrapper max-width to 800px so everything aligns tightly
                content = content.replace(
                    /<article className="max-w-\[1200px\] mx-auto/g, 
                    '<article className="max-w-[800px] mx-auto'
                );

                // 2. We only want to replace the className string that specifically follows dangerouslySetInnerHTML
                // A safe way is to find the index of "dangerouslySetInnerHTML" and then the first "className=" after it
                const indexHtml = content.indexOf('dangerouslySetInnerHTML');
                if (indexHtml !== -1) {
                    const indexClassStart = content.indexOf('className="', indexHtml);
                    if (indexClassStart !== -1) {
                        const indexClassEnd = content.indexOf('"', indexClassStart + 11);
                        if (indexClassEnd !== -1) {
                            content = content.substring(0, indexClassStart) + newClasses + content.substring(indexClassEnd + 1);
                        }
                    }
                }

                fs.writeFileSync(pagePath, content, 'utf8');
                updatedCount++;
                console.log(`Updated: ${item}/page.tsx`);
            }
        }
    }
    
    console.log(`Successfully updated ${updatedCount} blog posts.`);

} catch (e) {
    console.error("Error processing blogs:", e);
}
