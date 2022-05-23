import Coordinate from '../types/Coordinate';
import { Premium } from '../types/Premium';
import { Piece } from './Piece';
import { Util } from './Util';

export abstract class Tile {
	coordinate: Coordinate;
	premium: Premium;

	constructor(coordinate: Coordinate) {
		this.coordinate = coordinate;
		this.premium = Util.getPremium(coordinate);
	}

	abstract isEmpty(): boolean;
	abstract getPiece(): Piece | null;
}

export class EmptyTile extends Tile {
	isEmpty(): boolean {
		return true;
	}
	getPiece(): Piece | null {
		return null;
	}
}

export class OccupiedTile extends Tile {
	piece: Piece;
	constructor(coordinate: Coordinate, piece: Piece) {
		super(coordinate);
		this.piece = piece;
	}
	isEmpty(): boolean {
		return false;
	}
	getPiece(): Piece | null {
		return this.piece;
	}
}
