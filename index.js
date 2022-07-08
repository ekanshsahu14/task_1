import fetch from 'node-fetch';
const name = process.argv[2];

const nationality = await fetch(`https://api.nationalize.io/?name=${name}`)
console.log(nationality)