const fs = require("fs");

const log = fs.readFileSync("gitlog.txt", "utf-8");
const lines = log.trim().split("\n");

console.log("// === GitGraph Code Start ===");
console.log(`const main = gitgraph.branch("main");`);

lines.reverse().forEach((line) => {
  const [hash, author, message] = line.split("|");
  const commitMsg = `${message.trim()} (${hash}) by ${author}`;
  console.log(`main.commit("${commitMsg}");`);
});

console.log("// === GitGraph Code End ===");
