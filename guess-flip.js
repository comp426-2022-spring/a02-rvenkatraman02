// import minimist from 'minimist';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);

import { flipACoin } from './modules/coin.mjs';

const args = require('minimist')(process.argv.slice(2));
args['call'];
const call = args.call;

// const argv = (minimist)(process.argv.slice(2));
// argv['call']
// const call = argv.call;

if (call == "heads" || call == "tails") {
    console.log(flipACoin(call));
}
else if (call == null) console.log("Error: no input.\nUsage: node guess-flip --call[heads|tails]");
else console.log("Error: incorrect input.\nUsage: node guess-flip --call[heads|tails]");