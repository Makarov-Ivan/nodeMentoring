const fs = require('fs-extra');
const csvtojson = require('csvtojson');
const { pipeline } = require('stream');
const readline = require('readline');

const read=fs.createReadStream('./task1/csv/nodejs-hw1-ex1.csv')
const write=fs.createWriteStream('./task1/csv/nodejs-hw1-ex1.txt')

read.on('error', (error)=>{
    console.log('ERROR ocured while READING:\n', error);
})

write.on('error', (error)=>{
    console.log('ERROR ocured while WRITING\n', error);
})


pipeline(read, csvtojson(), write, (err)=>{console.log(err);})
