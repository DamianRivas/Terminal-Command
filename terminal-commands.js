const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, "");

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile("./newfile.txt", null, err => {
    if (err) {
      console.log("ERROR:", err);
    }
  });
};

module.exports.mkdir = () => {
  fs.mkdir("./newdir", err => {
    if (err) {
      console.log("ERROR:", err);
    }
  });
};
