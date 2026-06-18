const Jimp = require("jimp");

Jimp.read("public/logo.png")
  .then(image => {
    // #E6E8EA is rgb(230,232,234)
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      var red   = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue  = this.bitmap.data[idx + 2];
      
      if (Math.abs(red - 230) < 25 && Math.abs(green - 232) < 25 && Math.abs(blue - 234) < 25) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      }
    });
    return image.writeAsync("public/logo.png");
  })
  .then(() => {
    console.log("transparent logo generated at public/logo.png");
  })
  .catch(err => {
    console.error(err);
  });
