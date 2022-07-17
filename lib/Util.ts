import Coordinate from '../types/Coordinate';
import { Premium } from '../types/Premium';
import { Language } from '../types/Language';
import { Board, Piece } from '..';
import MovePiece from '../types/MovePiece';
import LangFiles from '../types/LangFiles';
export class Util {
	constructor() {
		throw new SyntaxError(
			'Util does not support initialisation, please use the static fields',
		);
	}

	static readonly dlsIndeces = [
		3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 120, 126, 128,
		132, 165, 172, 179, 213, 221,
	];
	static readonly tlsIndeces = [
		20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204,
	];
	static readonly dwsIndeces = [
		16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208,
	];
	static readonly twsIndeces = [0, 7, 14, 105, 119, 210, 217, 224];

	/// Set the Tile premiums based on the Tile coordinate
	static getPremium(coordinate: Coordinate): Premium {
		if (this.dlsIndeces.includes(coordinate.index)) {
			return Premium.DLS;
		} else if (this.tlsIndeces.includes(coordinate.index)) {
			return Premium.TLS;
		} else if (this.dwsIndeces.includes(coordinate.index)) {
			return Premium.DWS;
		} else if (this.twsIndeces.includes(coordinate.index)) {
			return Premium.TWS;
		}
		return Premium.NONE;
	}

	/// Read the language file and generate the Piece bag
	static getBag(language: Language): Piece[] {
		const bag: Array<Piece> = [];
		const bagData = LangFiles[language];
		bagData.forEach(
			(element: { letter: string; amount: number; score: number }) => {
				for (let i = 0; i < element.amount; i++) {
					const pieceObj: Piece = {
						letter: element.letter,
						points: element.score,
					};
					bag.push(pieceObj);
				}
			},
		);

		// Fisher-Yates shuffle, thanks to https://bost.ocks.org/mike/shuffle/
		let current = bag.length;
		let tmpPiece: Piece;
		let index: number;

		while (current) {
			index = Math.floor(Math.random() * current--);

			tmpPiece = bag[current];
			bag[current] = bag[index];
			bag[index] = tmpPiece;
		}

		return bag;
	}

	static calculatePoints(board: Board, movePieces: Array<MovePiece>): number {
		let wordScore = 0;
		const wordPremiums = [];
		/// Calculate letterScore, change board, calculate Premiums
		for (let i = 0; i < movePieces.length; i++) {
			let letterScore = 0;
			const tile = board[movePieces[i].toCoordinate.index];
			const premium = board[movePieces[i].toCoordinate.index].premium;
			letterScore = tile.getPiece()?.points ?? 0;
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
		return wordScore;
	}
}
