import sharp from 'sharp';
import path from 'path';

async function convertImage() {
  const inputPath = 'D:\\agent manager\\Lemonade Ideas Website\\Icons\\picture-for-google-ads-1.png';
  const outputPath = 'D:\\agent manager\\Lemonade Ideas Website\\public\\images\\picture-for-google-ads-1.webp';

  try {
    await sharp(inputPath)
      .webp({ quality: 90 })
      .toFile(outputPath);
    console.log(`Successfully converted image to WebP: ${outputPath}`);
  } catch (err) {
    console.error(`Error converting image:`, err);
  }
}

convertImage();
