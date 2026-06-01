import Jimp from "jimp";

Jimp.read("logo.png")
  .then(image => {
    // #E6E8EA is rgb(230,232,234)
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      var red   = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue  = this.bitmap.data[idx + 2];
      
      // If color is close to #E6E8EA (with some tolerance)
      if (Math.abs(red - 230) < 25 && Math.abs(green - 232) < 25 && Math.abs(blue - 234) < 25) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0 for transparency
      }
    });
    return image.writeAsync("logo-transparent.png");
  })
  .then(() => {
    console.log("transparent logo generated at logo-transparent.png");
  })
  .catch(err => {
    console.error(err);
  });
