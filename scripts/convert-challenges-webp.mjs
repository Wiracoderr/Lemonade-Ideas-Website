import sharp from 'sharp';
import fs from 'fs';

const inputImagePath = 'D:/agent manager/Lemonade Ideas Website/Icons/img101.png';
const outputImagePath = 'public/images/google-ads-challenges.webp';

async function convertImage() {
  try {
    if (fs.existsSync(inputImagePath)) {
        // High quality webp conversion
        await sharp(inputImagePath)
        .webp({ 
            quality: 90, 
            effort: 6,
            lossless: false // Near lossless is usually better for photos/complex images
        })
        .toFile(outputImagePath);
        console.log('Successfully converted image to WebP:', outputImagePath);
    } else {
        console.error('File not found:', inputImagePath);
    }
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
