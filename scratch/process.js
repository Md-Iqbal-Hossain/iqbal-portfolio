const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '../public/images/My_favicon.jpeg');
const stats = fs.statSync(imgPath);
console.log('File size bytes:', stats.size);
