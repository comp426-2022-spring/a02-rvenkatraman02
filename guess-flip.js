import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));
argv['call']
const call = argv.call;

if (call == null) {
    console.log("Error: No input");
}
else if(call != "heads" && call != "tails") {
    console.log("Error: Incorrect input");
}
else {
    console.log(flipACoin(call));
}