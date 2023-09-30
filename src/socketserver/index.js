import jwt from 'jsonwebtoken';
import logger from '../middlewares/logger';

const socket_io = require('socket.io');

const io = socket_io();
const socketApi = {};
socketApi.io = io;

const Adminauth = async function (socket) {
  try {
    const { token } = socket.handshake.auth;
    if (token) {
      const decodetoken = await jwt.verify(token, process.env.Admin_Access_Token);
      if (!decodetoken.id) {
        return io.of('/api/companies/socket').to(socket.id).emit('error', {
          message: 'token is expired, again login',
          status: 404,
        });
      }

      // if (!user) {
      //   return io.of('/api/companies/socket').to(socket.id).emit('error', {
      //     message: 'admin not found, please register or check auth token',
      //     status: 404,
      //   });
      // }

      // socket.adminuser = user._id;
      // socket.adminrole = decodetoken.role;
      // const online = socket.client.conn.server.clientsCount;
      // console.log(`user Connection online: ${online}`);
      // socket.join(user.companies_id.toString());
      // console.log(socket.rooms);

      // socket.on('join', (data) => {
      //   console.log('=========join room ==========');
      //   console.log(data);
      //   const { room } = data;
      //   console.log('room id', room);
      //   socket.join(room);
      // });

      socket.on('disconnect', () => {
        const offline = socket.client.conn.server.clientsCount;
        console.log(`user Disconnected : ${offline}`);
      });
    }
  } catch (error) {
    return io.of('/api/companies/socket').to(socket.id).emit('error', {
      message: `${error.message}`,
      status: 404,
    });
  }
};

const OnliveTrackconnection = async function (socket) {
  await Adminauth(socket);
};

async function socketconnection() {
  try {
    logger.info('🚀 Web socket connection initialization');
    io.of('/api/nokia/socket').on('connection', OnliveTrackconnection); // token auth
    //  livecapture_changeStream(io);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
}

export { socketApi, io, socketconnection };
