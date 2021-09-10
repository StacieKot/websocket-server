import { Message, Messages } from "../types/message";
import { Room } from "../types/room";

export const getMessageId = (messagesList: Messages): string => {
  let id = (Math.floor(Math.random() * 10001) + 1000).toString();
  if (messagesList[id]) {
    id = getMessageId(messagesList);
  }
  return id;
};

export const addMessage = (
  room: Room,
  message: Message
): { updatedRoom: Room; messageId: string } => {
  const messageId = getMessageId(room.messages);
  const updatedRoom = {
    ...room,
    messages: { ...room.messages, [messageId]: message },
  };
  return { updatedRoom, messageId };
};
