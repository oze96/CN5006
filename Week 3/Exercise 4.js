os = require("os");
const util = require("util");

console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());

console.log("OS: " + os.platform() + "\nRelease:" + os.release());
console.log("Uptime: " + os.uptime() / 3600 + " hours");

console.log("userInfo" + util.inspect(os.userInfo()));
console.log("Memory " + os.totalmem() / 1000000000 + "GB");

console.log("Free: " + os.freemem() / 1000000000 + "GB");
console.log("CPU: " + util.inspect(os.cpus()));

console.log("Network" + util.inspect(os.networkInterfaces()));

console.log("Program End");
