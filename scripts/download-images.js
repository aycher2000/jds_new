const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    filename: 'hero-bg.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    filename: 'product-placeholder.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
    filename: 'about-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    filename: 'about-story.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    filename: 'team-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    filename: 'team-2.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    filename: 'team-3.jpg',
  },
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(
          fs.createWriteStream(path.join(__dirname, '../public/images', filename))
        ).on('error', reject).once('close', () => resolve(filename));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const downloadAllImages = async () => {
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
      console.log(`Downloaded: ${image.filename}`);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages(); 