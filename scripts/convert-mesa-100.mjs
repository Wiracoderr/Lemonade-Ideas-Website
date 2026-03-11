import sharp from 'sharp';

async function convertImage() {
  const inputPath = 'D:\\agent manager\\Lemonade Ideas Website\\Icons\\Mesa de trabajo 1-100.jpg';
  const outputPath = 'D:\\agent manager\\Lemonade Ideas Website\\public\\images\\mesa-de-trabajo-1-100.webp';

  try {
    await sharp(inputPath)
      .webp({ quality: 85 }) // High quality WebP
      .toFile(outputPath);
    console.log(`Successfully converted image to WebP: ${outputPath}`);
  } catch (err) {
    console.error(`Error converting image:`, err);
  }
}

convertImage();
