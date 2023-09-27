import jwt from 'jsonwebtoken';

import util from 'util';
import { handleError, handleResponse } from './requestHandler';
import { Users } from '../db/models';

// const jwt = new JWTR(redis);
// const jwtrAsync = Promise.promisifyAll(jwt);

require('dotenv').config();

export async function admin_genAccessToken(id, role) { // refresh token
  const AccessToken = jwt.sign({ id, role }, process.env.Admin_Access_Token, { // acccess token
    expiresIn: '1h',
  });

  return AccessToken;
}

export async function admin_genrefreshToken(id, role) {
  const RefreshToken = jwt.sign({ id, role }, process.env.Admin_Refresh_Token, {
    expiresIn: '20d',
  });
  return RefreshToken;
}

export async function admintoken(req, res, next) {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return handleError({
      res,
      statusCode: 401,
      data: 'Token not Provided!!!',
    });
  }
  try {
    const decode = jwt.verify(token, process.env.Admin_Access_Token);
    const user = await Users.findById(decode.id).select('id');
    req.user = user;
    req.userid = user.id;
    req.role = decode.role;
    if (!user) {
      return handleResponse({
        res,
        statusCode: 404,
        data: {
          message: 'admin not found, please register or check auth token',
          status: 404,
        },
      });
    }
    if (decode.role !== 'Master' && decode.role !== 'Admin') {
      return handleResponse({
        res,
        statusCode: 404,
        data: {
          message: 'Permission denied please check role',
          status: 404,
        },
      });
    }
    next();
  } catch (error) {
    return handleError({
      res,
      statusCode: 401,
      data: 'Token Expired',
    });
  }
}
