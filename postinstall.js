const fs = require("fs");

fs.copyFileSync("./node_modules/vbjs/dist/1.3.5/bundle/vbjs.js", "./module-demo/libs/vbjs.js");
fs.copyFileSync("./node_modules/vbjs/dist/1.3.5/bundle/vbjs.js", "./template-demo/libs/vbjs.js");

