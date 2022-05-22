import Coordinate from "../types/Coordinate";
import { Premium } from "../types/Premium";
export class Util {
  constructor() {
    throw new SyntaxError(
      "Util does not support initialisation, please use the static fields"
    );
  }

  static readonly dlsIndeces = [
    3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 120, 126, 128, 132,
    165, 172, 179, 213, 221,
  ];
  static readonly tlsIndeces = [
    20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204,
  ];
  static readonly dwsIndeces = [
    16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208,
  ];
  static readonly twsIndeces = [0, 7, 14, 105, 119, 210, 217, 224];

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
}
