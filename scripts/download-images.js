const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1594970484107-dbfa06d45098',
    filename: 'mpc-ring-gold.jpg',
    description: 'Gold MPC Ring'
  },
  {
    url: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6',
    filename: 'mpc-ring-silver.jpg',
    description: 'Silver MPC Ring'
  },
  {
    url: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625',
    filename: 'dj-kit.jpg',
    description: 'DJ Testing Kit'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '..', 'public', 'images', 'products', filename);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(`${url}?w=800&q=80`, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  try {
    await Promise.all(images.map(image => downloadImage(image.url, image.filename)));
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages(); 