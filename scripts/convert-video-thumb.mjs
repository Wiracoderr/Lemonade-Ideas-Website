import sharp from 'sharp';
import fs from 'fs';

const inputImagePath = 'D:/agent manager/Lemonade Ideas Website/google ads video.jpg';
const outputImagePath = 'public/images/google-ads-video-thumb.webp';

async function convertImage() {
  try {
    if (fs.existsSync(inputImagePath)) {
        await sharp(inputImagePath)
        .webp({ quality: 80 })
        .toFile(outputImagePath);
        console.log('Successfully converted video thumbnail to WebP:', outputImagePath);
    } else {
        console.error('File not found:', inputImagePath);
    }
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
