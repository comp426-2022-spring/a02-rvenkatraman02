import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';

const argv = (minimist)(process.argv.slice(2));
argv['call']
const call = argv.call;

if (call == 'heads' || call == 'tails') {
    console.log(flipACoin(call));
}
else {
    console.log('Error: Incorrect input');
}