export interface Message {
  text: string;
  userId: string;
}

export interface Messages {
  [id: string]: Message;
}
