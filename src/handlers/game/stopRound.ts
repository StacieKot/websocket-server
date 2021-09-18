import { Socket } from 'socket.io';
import { stopRound } from '../../actions/game/stopRound';
import { GameEvents } from '../../constants/events';
import { handleError } from '../../helpers';
import { store } from '../../store';
import { EventCallback } from '../../types/callbacks';

export const stopRoundHandler =
  (socket: Socket) =>
  (roomId: string, callback: EventCallback): void => {
    try {
      const { currentRound, issue } = stopRound(roomId, store);
      callback({
        status: 200,
        data: { currentRound, issue },
      });
      socket
        .to(roomId)
        .emit(GameEvents.roundIsStopped, { currentRound, issue });
    } catch {
      handleError(socket, callback);
    }
  };