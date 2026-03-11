import sharp from 'sharp';

async function convertImage() {
  const inputPath = 'D:\\agent manager\\Lemonade Ideas Website\\Icons\\Mesa de trabajo 1.webp';
  const outputPath = 'D:\\agent manager\\Lemonade Ideas Website\\public\\images\\explore-add-ons.webp';

  try {
    await sharp(inputPath)
      .webp({ quality: 90 }) // Re-compressing to ensure optimal size while maintaining quality
      .toFile(outputPath);
    console.log(`Successfully converted image to WebP: ${outputPath}`);
  } catch (err) {
    console.error(`Error converting image:`, err);
  }
}

convertImage();
