import fs from 'fs';

const file1 = 'C:/Users/Tarek/.gemini/antigravity/brain/11c86570-c1de-433e-91d1-df1ff0c63342/media__1773247564037.png';
const file2 = 'C:/Users/Tarek/.gemini/antigravity/brain/11c86570-c1de-433e-91d1-df1ff0c63342/media__1773247592472.png';

fs.copyFileSync(file1, 'public/images/test1.png');
fs.copyFileSync(file2, 'public/images/test2.png');
console.log('Copied to public/images');
