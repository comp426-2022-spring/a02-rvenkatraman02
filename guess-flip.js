import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';

const args = (minimist)(process.argv.slice(2));
args['call']
const call = args.call;

if (call == "heads" || call == "tails") {
    console.log(flipACoin(call));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call[heads|tails]");
}