import sharp from 'sharp';
import fs from 'fs';

const inputImagePath = 'D:/agent manager/Lemonade Ideas Website/Icons/Frame-2-1.png';
const outputImagePath = 'public/images/google-ads-timeline.avif';

async function convertImage() {
  try {
    if (fs.existsSync(inputImagePath)) {
        // Use high quality AVIF settings
        await sharp(inputImagePath)
        .avif({ 
            quality: 90, 
            effort: 6,
            chromaSubsampling: '4:4:4'
        })
        .toFile(outputImagePath);
        console.log('Successfully converted image to AVIF:', outputImagePath);
    } else {
        console.error('File not found:', inputImagePath);
    }
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
