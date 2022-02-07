import {coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from "minimist";

const argv = (minimist)(process.argv.slice(2));
argv['number'];
const flips = argv.number || 1;

var flips_arr = coinFlips(flips);
console.log(flips_arr);
console.log(countFlips(flips_arr));
