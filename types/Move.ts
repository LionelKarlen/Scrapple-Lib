import Player from '../lib/Player';
import MovePiece from './MovePiece';
export default interface Move {
	player: Player;
	movePieces: Array<MovePiece>;
}
