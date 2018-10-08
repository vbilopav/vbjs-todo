const fs = require("fs");

if (!fs.existsSync("./module-demo/libs/vbjs")){
    fs.mkdirSync("./module-demo/libs/vbjs");
}
fs.copyFileSync("./node_modules/vbjs/dist/1.3.5/bundle/vbjs.js", "./module-demo/libs/vbjs/vbjs.js");
if (!fs.existsSync("./module-demo/libs/requirejs")){
    fs.mkdirSync("./module-demo/libs/requirejs");
}
fs.copyFileSync("./node_modules/requirejs/require.js", "./module-demo/libs/requirejs/require.js");


if (!fs.existsSync("./template-demo/libs/vbjs")){
    fs.mkdirSync("./template-demo/libs/vbjs");
}
fs.copyFileSync("./node_modules/vbjs/dist/1.3.5/bundle/vbjs.js", "./template-demo/libs/vbjs/vbjs.js");
if (!fs.existsSync("./template-demo/libs/requirejs")){
    fs.mkdirSync("./template-demo/libs/requirejs");
}
fs.copyFileSync("./node_modules/requirejs/require.js", "./template-demo/libs/requirejs/require.js");

