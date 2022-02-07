import {coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from "minimist";

const argv = (minimist)(process.argv.slice(2));
argv['number']
const flips = argv.number || 1;

console.log(coinFlips(flips));
console.log(countFlips(flips));
