import Scrapple from './lib/Scrapple';
import Move from './types/Move';

function main() {
	const s: Scrapple = new Scrapple(2, 'en'); // Initialise new game
	// Check fields
	console.log(s.board);
	console.log(s.bag);
	console.log(s.players);
	console.log(s.bag.length);

	// Define a move
	const move: Move = {
		movePieces: [
			{
				index: 0,
				piece: s.players[0].bench[0],
				toCoordinate: {
					x: 7,
					y: 7,
					index: 112,
				},
			},
		],
		player: s.players[0],
	};

	// Make the move
	s.makeMove(move);
}

main();
