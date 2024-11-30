import type http from 'node:http';
import { Server, type Socket } from 'socket.io';

interface ListUsers {
  [key: string]: string; // nickname: socketId
}

const listUsers: ListUsers = {};

// Configuración y manejo de eventos para Socket.IO
export const setupSocketIO = (server: http.Server): void => {
  const io = new Server(server, {
    cors: { origin: '*' },
  });

  io.on('connection', (socket: Socket) => {
    console.log('User connected');

    socket.on('register', (nickname: string) => {
      if (listUsers[nickname]) {
        socket.emit('userExists');
      } else {
        listUsers[nickname] = socket.id;
        socket.data.nickname = nickname;
        socket.emit('login');
        io.emit('activeSessions', listUsers);
      }
    });

    socket.on('disconnect', () => {
      if (socket.data.nickname) {
        delete listUsers[socket.data.nickname];
        io.emit('activeSessions', listUsers);
      }
    });

    socket.on('sendMessage', ({ message }) => {
      io.emit('sendMessage', { message, user: socket.data.nickname });
    });

    socket.on('sendMessagesPrivate', ({ message, selectUser }) => {
      if (listUsers[selectUser]) {
        io.to(listUsers[selectUser]).emit('sendMessage', {
          message,
          user: socket.data.nickname,
        });
        io.to(socket.id).emit('sendMessage', {
          message,
          user: socket.data.nickname,
        });
      } else {
        io.to(socket.id).emit('sendMessage', {
          message,
          user: socket.data.nickname,
        });
        console.log(
          'El usuario al que intentas enviar el mensaje no está conectado o no existe!',
        );
      }
    });
  });
};
