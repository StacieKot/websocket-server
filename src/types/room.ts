import { GameSettings, GameStatus } from "./game";
import { Issues } from "./issue";
import { Messages } from "./message";
import { Users } from "./user";

export interface Room {
  users: Users;
  messages: Messages;
  issues: Issues;
  gameStatus: keyof typeof GameStatus;
  gameSettings: GameSettings;
}

export interface StoreSchema {
  [id: string]: Room;
}
