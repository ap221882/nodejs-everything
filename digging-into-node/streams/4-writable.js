var fs = require("fs");

var w = fs.createWriteStream("cool.txt");

w.on("finish", function () {
  console.log("FINISHED WRITING!");
});

w.write("Hey,\n");
w.write("Ajay\n");
w.write("is here!\n");
w.end();
