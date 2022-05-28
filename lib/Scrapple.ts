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

	constructor(playercount: number, language: Language) {
		this.board = new Array(225);
		for (let i = 0; i < this.board.length; i++) {
			const coordinate: Coordinate = {
				x: i % 15,
				y: Math.floor(i / 15),
				index: i,
			};
			this.board[i] = new EmptyTile(coordinate);
		}
		this.players = new Array(playercount);
		for (let i = 0; i < playercount; i++) {
			this.players[i] = new Player(i);
		}
		this.bag = Util.getBag(language);
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].bench = this.bag.splice(0, 7);
		}
	}

	makeMove(move: Move) {
		let wordScore = 0;
		const wordPremiums = [];
		/// Calculate letterScore, change board, calculate Premiums
		for (let i = 0; i < move.movePieces.length; i++) {
			let letterScore = 0;
			this.board[move.movePieces[i].toCoordinate.index] =
				new OccupiedTile(
					move.movePieces[i].toCoordinate,
					move.movePieces[i].piece,
				);
			const tile = this.board[move.movePieces[i].toCoordinate.index];
			const premium =
				this.board[move.movePieces[i].toCoordinate.index].premium;
			letterScore = tile.getPiece()?.points ?? 1;
			if (premium < 4) {
				letterScore *= premium;
			} else {
				wordPremiums.push(premium);
			}
			wordScore += letterScore;
		}
		/// Calculate wordScore Premiums
		for (let i = 0; i < wordPremiums.length; i++) {
			wordScore *= wordPremiums[i] - 2;
		}

		this.players[move.player.index].score += wordScore;
	}
}
