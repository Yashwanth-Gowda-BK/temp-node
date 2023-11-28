

const {readFileSync,writeFileSync, read} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const sec = readFileSync('./content/sec.txt','utf8')

console.log(first,sec);

writeFileSync(`./content/result-sync.txt`,`Here is the result: ${first},${sec}`,{flag:'a'});
console.log('done with the text');
console.log('starting the next one');