import Scrapple from './lib/Scrapple';

function main() {
	const s: Scrapple = new Scrapple(2, 'en');
	console.log(s.board);
	console.log(s.bag);
	console.log(s.players);
	console.log(s.bag.length);
}

main();
