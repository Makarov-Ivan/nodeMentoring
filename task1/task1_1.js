const { Transform } = require('stream');
const { stdin, stdout } = require('process')
const R = require('ramda');
console.log('Program is running!');

const reverser = new Transform({
    transform(chunk, _, fn) {
        const input = chunk.toString();
        const stringReverser = R.pipe(R.concat('\n'), R.reverse)
        this.push(stringReverser(input))
        fn()
    }
})
stdin.pipe(reverser).pipe(stdout)