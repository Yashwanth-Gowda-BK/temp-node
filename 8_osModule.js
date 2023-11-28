const { log } = require('console');
const os = require('os')

const user = os.userInfo();
console.log(user);

// method returns the system uptime in sec
console.log(`the system uptimeis ${os.uptime()} sec`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOS)