import { GameSettings, GameStatus } from './game';
import { Issues } from './issue';
import { Message } from './message';
import { Users } from './user';

export interface Room {
  users: Users;
  messages: Message[];
  issues: Issues;
  gameStatus: keyof typeof GameStatus;
  gameSettings: GameSettings;
  currentIssueId: string;
  roundIsActive: boolean;
  gameTitle: string;
  masterId: string;
}

export interface StoreSchema {
  [id: string]: Room;
}

export interface Store {
  [id: string]: Room;
}

