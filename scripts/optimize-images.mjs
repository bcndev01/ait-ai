import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';

const inputDir = './public/images/3d-models';
const outputDir = './public/images/3d-models';

// Ensure output directory exists
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

const files = readdirSync(inputDir).filter(f =>
    ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
);

console.log(`Found ${files.length} images to optimize...`);

for (const file of files) {
    const inputPath = join(inputDir, file);
    const nameWithoutExt = basename(file, extname(file));

    // Create WebP version (much smaller)
    const webpPath = join(outputDir, `${nameWithoutExt}.webp`);
    await sharp(inputPath)
        .webp({ quality: 80 })
        .resize(800, null, { withoutEnlargement: true })
        .toFile(webpPath);

    // Create optimized PNG fallback
    const pngPath = join(outputDir, `${nameWithoutExt}-optimized.png`);
    await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9 })
        .resize(800, null, { withoutEnlargement: true })
        .toFile(pngPath);

    console.log(`✓ Optimized: ${file}`);
}

console.log('\nDone! WebP and optimized PNG versions created.');
