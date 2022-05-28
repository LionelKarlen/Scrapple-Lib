import { Piece } from './Piece';
export default class Player {
	name: string;
	index: number;
	score: number;
	bench: Array<Piece>;

	constructor(index: number) {
		this.index = index;
		this.score = 0;
		this.name = '';
		this.bench = new Array<Piece>(7);
	}
}
