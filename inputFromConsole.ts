import * as promptSync from 'prompt-sync'

const prompt =promptSync();
const firstName:String = prompt('Enter first name');
const lastName:String = prompt('Enter last name');
console.log(`Welcome ${firstName} ${lastName} to coding`);