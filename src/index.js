console.log("root", process.version);
const ora = require("ora");
const spinner = ora("Loading...").start();

setTimeout(() => {
    spinner.succeed("Done!\n");
}, 1000);
