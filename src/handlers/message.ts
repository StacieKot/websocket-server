import { addMessage } from "../actions/messages";
import { ChatEvents } from "../constants/events";
import { getRoom, handleError } from "../helpers";
import { HandlerParams } from "../types";
import { EventCallback } from "../types/callbacks";
import { MessageData } from "../types/data";

export const sendMessageHandler =
  ({ socket, redisGetAsync, redisSetAsync }: HandlerParams) =>
  async (
    { roomId, text }: MessageData,
    callback: EventCallback
  ): Promise<void> => {
    try {
      const room = await getRoom(roomId, redisGetAsync);
      const message = { userId: socket.id, text };
      const { updatedRoom, messageId } = addMessage(room, message);
      await redisSetAsync(roomId, JSON.stringify(updatedRoom));
      callback({ status: 200, data: { message, messageId } });
      socket.to(roomId).emit(ChatEvents.receiveMessage, { message, messageId });
    } catch {
      handleError(socket, callback);
    }
  };
