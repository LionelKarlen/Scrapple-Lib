import { EmptyTile, Tile } from "./Tile";
import Coordinate from "../types/Coordinate";
import { Board } from "../types/Board";

export default class Scrapple {
  board: Board;

  constructor(playercount: Number) {
    this.board = new Array(225);
    for (let i = 0; i < this.board.length; i++) {
      let coordinate: Coordinate = {
        x: i % 15,
        y: Math.floor(i / 15),
        index: i,
      };
      this.board[i] = new EmptyTile(coordinate);
    }
  }
}
