import { EmptyTile, OccupiedTile } from './Tile';
import Coordinate from '../types/Coordinate';
import { Board } from '../types/Board';
import Player from './Player';
import { Piece } from '..';
import { Util } from './Util';
import { Language } from '../types/Language';
import Move from '../types/Move';

export default class Scrapple {
	board: Board;
	players: Array<Player>;
	bag: Array<Piece>;
	running: boolean;

	constructor(playercount: number, language: Language) {
		/// Initialise Board
		this.board = new Array(225);
		for (let i = 0; i < this.board.length; i++) {
			const coordinate: Coordinate = {
				x: i % 15,
				y: Math.floor(i / 15),
				index: i,
			};
			this.board[i] = new EmptyTile(coordinate);
		}
		/// Initialise Players
		this.players = new Array(playercount);
		for (let i = 0; i < playercount; i++) {
			this.players[i] = new Player(i);
		}
		/// Initialise Bag
		this.bag = Util.getBag(language);
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].bench = this.bag.splice(0, 7);
		}

		this.running = true;
	}

	makeMove(move: Move) {
		/// Calculate letterScore, change board, calculate Premiums
		for (let i = 0; i < move.movePieces.length; i++) {
			this.board[move.movePieces[i].toCoordinate.index] =
				new OccupiedTile(
					move.movePieces[i].toCoordinate,
					move.movePieces[i].piece,
				);
		}

		const wordScore = Util.calculatePoints(this.board, move.movePieces);
		this.players[move.player.index].score += wordScore;
		/// Update player bag
		if (this.bag.length > 7) {
			this.players[move.player.index].bench = this.bag.splice(
				0,
				7 - this.players[move.player.index].bench.length,
			);
		} else {
			this.handleGameOver();
		}
	}

	/// Return the winning player, based on who has the higher score
	handleGameOver() {
		const playerCopy = this.players;
		const winner = playerCopy.sort((a, b) => b.score - a.score)[0];
		this.running = false;
		return winner;
	}
}
