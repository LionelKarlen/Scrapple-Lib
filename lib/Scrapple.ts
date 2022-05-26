import { EmptyTile } from './Tile';
import Coordinate from '../types/Coordinate';
import { Board } from '../types/Board';
import Player from '../types/Player';
import { Piece } from '..';
import { Util } from './Util';
import { Language } from '../types/Language';

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
}
