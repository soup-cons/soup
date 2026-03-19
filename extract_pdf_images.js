const pdfExportImages = require('pdf-export-images');
// Check if it's default export
const exportImages = pdfExportImages.exportImages || pdfExportImages.default || pdfExportImages;

exportImages('C:\\Users\\derya\\OneDrive\\Masaüstü\\soup\\SOUP_UFR3S_OCSC.pdf', 'C:\\Users\\derya\\OneDrive\\Masaüstü\\soup\\site\\public\\images')
  .then(images => console.log('Exported', images.length, 'images'))
  .catch(console.error);
