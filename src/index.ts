import cors from "cors";
import express from "express";
import { createServer } from "http";
import redis from "redis";
import { Server, Socket } from "socket.io";
import { promisify } from "util";
import {
  ChatEvents,
  KickUserEvents,
  RoomEvents,
  UserEvents,
} from "./constants/events";
import { sendMessageHandler } from "./handlers/message";
import {
  checkRoomHandler,
  createRoomHandler,
  joinRoomHandler,
  leaveRoomHandler,
} from "./handlers/room";
import { kickUserHandler, kickUserVotingHandler } from "./handlers/user";
import secret from "./secret";
import { HandlerParams } from "./types";

const PORT = process.env.PORT || 5000;
const app = express();

const allowedOrigins = ["http://localhost:8080", "http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello!");
// });
const server = createServer(app);
const io = new Server(server);
const client = redis.createClient(secret);

const redisGetAsync = promisify(client.get).bind(client);
const redisSetAsync = promisify(client.set).bind(client);

io.on("connection", (socket: Socket) => {
  console.log("Connected " + socket.id);
  const params: HandlerParams = { socket, redisGetAsync, redisSetAsync };

  socket.on(RoomEvents.createRoom, createRoomHandler(params));
  socket.on(RoomEvents.isRoomValid, checkRoomHandler(params));
  socket.on(UserEvents.joinRoom, joinRoomHandler(params));
  socket.on(ChatEvents.sendMessage, sendMessageHandler(params));
  socket.on(UserEvents.leaveRoom, leaveRoomHandler(params));
  socket.on(KickUserEvents.kickUser, kickUserHandler(params));
  socket.on(KickUserEvents.kickingVote, kickUserVotingHandler(io, params));
  // socket.on(UserEvents.disconnecting, disconnectingUserHandler(socket));
});

server.listen(PORT, () => {
  console.log("Server is listen on PORT 5000");
});
