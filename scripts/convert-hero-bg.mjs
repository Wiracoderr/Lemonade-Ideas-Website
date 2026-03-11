import sharp from 'sharp';

const inputImagePath = 'C:/Users/Tarek/.gemini/antigravity/brain/11c86570-c1de-433e-91d1-df1ff0c63342/google_ads_hero_bg_1773245942234.png';
const outputImagePath = 'public/images/google-ads-hero-bg.webp';

async function convertImage() {
  try {
    await sharp(inputImagePath)
      .webp({ quality: 80 })
      .toFile(outputImagePath);
    console.log('Successfully converted image to WebP:', outputImagePath);
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
