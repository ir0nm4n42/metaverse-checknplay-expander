const metaverse_checknplay = require('metaverse-checknplay');
const metaverse_checknplay_expander = require('metaverse-checknplay-expander');
const underscore = require('underscore');
const passport = require('passport');
const moment = require('moment');
const axios = require('axios');
const validator = require('validator');
const react_dom = require('react-dom');

const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(`Roots: ${roots}`);

const map = new Map();
map.set('foo', 'bar');
map.set('baz', 'qux');
console.log(`foo => ${map.get('foo')}`);

const util = require('util');
const formatted = util.format('This %s a %s', 'is', 'string');
console.log(formatted);

const joinedPath = path.join('/users', 'nodejs', 'snippets');
console.log(`Joined path: ${joinedPath}`);

const EventEmitter = require('events').EventEmitter;
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.emit('event');

// Get the balance of an Ethereum address
web3.eth.getBalance('0x1234567890123456789012345678901234567890').then(balance => {
  console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch(err => {
  console.error('Error getting balance:', err);
});

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));