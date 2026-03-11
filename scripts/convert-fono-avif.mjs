import sharp from 'sharp';
import fs from 'fs';

const inputImagePath = 'D:/agent manager/Lemonade Ideas Website/Icons/fono accel.png';
const outputImagePath = 'public/images/fono-accel.avif';

async function convertImage() {
  try {
    if (fs.existsSync(inputImagePath)) {
        // Use high quality and effort for AVIF to ensure no visible quality loss while retaining transparency
        await sharp(inputImagePath)
        .avif({ 
            quality: 90, // 90 is visually lossless for AVIF and provides huge size savings
            effort: 6,   // Higher effort means better compression
            chromaSubsampling: '4:4:4' // Preserve color details perfectly
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
