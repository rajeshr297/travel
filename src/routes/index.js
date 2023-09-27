import multer from 'multer';
import path from 'path';
import { handleResponse, handleError } from '../middlewares/requestHandler';
import Profile from './profile.router';
import Trolley from './trolley.router';
import Maintainer from './maintainer.router';

const initializeRoutes = (app) => {
  app
    .use('/api/trolley', Trolley)
    .use('/api/user', Profile)
    .use('/api/maintainer', Maintainer)
    .use((req, res, next) => {
      if (
        req.originalUrl
        && req.originalUrl.split('/').pop() === 'favicon.ico'
      ) {
        return res.sendStatus(204);
      }

      next();
    })
    .get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/Home.html'));
    })
    .get('/404', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/404.html'));
    })
    .use((error, req, res, next) => {
      // multerfunction
      if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
          return handleResponse({
            res,
            statusCode: 404,
            data: {
              message: 'File is large, upload 2MB below',
              status: 404,
            },
          });
        }
      }
      if (error.code === 'LIMIT_UNEXPECTED_FILE') {
        return handleResponse({
          res,
          statusCode: 404,
          data: {
            message: 'File must be an image JPEG and PNG',
            status: 404,
          },
        });
      }
    });
};

export default {
  initializeRoutes,
};
