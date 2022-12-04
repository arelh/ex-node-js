const fs = require("fs");
fs.writeFileSync("newFile.txt", "hello guys");

// fs.appendFileSync
fs.copyFileSync("newFile.txt", "copyFile.txt");
fs.renameSync("newFile.txt", "another copyFile.txt");

const dir = "../2. file_system";
const filesName = fs.readdirSync(dir);
filesName.map((file) => console.log(file));



console.log(fs.existsSync(dir));
