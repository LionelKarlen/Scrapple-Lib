import { Piece } from '..';
import Coordinate from './Coordinate';
export default interface MovePiece {
	toCoordinate: Coordinate;
	piece: Piece;
	index: number;
}
