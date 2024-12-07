import type http from 'node:http';
import { Server, type Socket } from 'socket.io';

interface ListUsers {
  [key: string]: string;
}

const listUsers: ListUsers = {};

export const setupSocketIO = (server: http.Server): void => {
  const io = new Server(server, {
    cors: { origin: '*' },
  });

  io.on('connection', (socket: Socket) => {
    console.log('User connected');

    // Registro del usuario
    socket.on('register', (nickname: string) => {
      if (listUsers[nickname]) {
        socket.emit('userExists');
      } else {
        listUsers[nickname] = socket.id;
        socket.data.nickname = nickname; // Se guarda el nickname en socket.data
        socket.emit('login');
        io.emit('activeSessions', listUsers);
      }
    });

    // Desconexión del usuario
    socket.on('disconnect', () => {
      if (socket.data.nickname) {
        delete listUsers[socket.data.nickname];
        io.emit('activeSessions', listUsers);
      }
    });

    // Mensajes públicos
    socket.on('sendMessage', ({ message }) => {
      io.emit('sendMessage', { message, user: socket.data.nickname });
    });

    // Mensajes privados
    socket.on('sendMessagesPrivate', ({ message, selectUser, chat_id }) => {
      if (listUsers[selectUser]) {
        io.to(listUsers[selectUser]).emit('sendMessage', {
          message,
          user: socket.data.nickname,
          chat_id,
        });
        io.to(socket.id).emit('sendMessage', {
          message,
          user: socket.data.nickname,
          chat_id,
        });
      }
    });
  });
};
