import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.resolve('img');
const files = fs.readdirSync(imgDir);

async function optimize() {
  console.log('🚀 Starting image optimization to WebP...\n');

  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(imgDir, file);
      const outputWebpName = file.replace('.png', '.webp');
      const outputPath = path.join(imgDir, outputWebpName);

      const stats = fs.statSync(inputPath);
      const origSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

      // Convert PNG to WebP with 82% quality + high effort compression
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
      const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

      console.log(`✅ Converted ${file} (${origSizeMB} MB) -> ${outputWebpName} (${newSizeMB} MB) | -${reduction}% size`);
    }
  }

  console.log('\n🎉 Image optimization complete!');
}

optimize().catch(console.error);
