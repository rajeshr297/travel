import bcrypt from 'bcrypt';
import { Users } from '../../db/models';
import logger from '../../middlewares/logger';
import {
  admin_genAccessToken,
  admin_genrefreshToken,
} from '../../middlewares/auth';

class ProfileService {
  async logins(email, password) {
    logger.info('inside admin login service');
    try {
      const employeefind = await Users.findOne({ email });
      if (!employeefind) {
        return {
          message: 'email is not found',
          status: 404,
        };
      }

      const validpwd = await bcrypt.compare(password, employeefind.password);
      if (!validpwd) {
        return {
          message: 'password is wrong, try again',
          status: 404,
        };
      }
      if (employeefind.role !== 'Master' && employeefind.role !== 'Admin') {
        return {
          message: 'Permission denied, Master and Admin only allowed',
          status: 404,
        };
      }

      return {
        message: 'successfully login',
        status: 200,
        employee: employeefind,
        token: {
          accessToken: await admin_genAccessToken(
            employeefind.id,
            employeefind.role,
          ),
          refreshToken: await admin_genrefreshToken(
            employeefind.id,
            employeefind.role,
          ),
        },
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async register(email, password) {
    logger.info('inside admin login service');
    try {
      const employeefind = await Users.findOne({ email });
      if (employeefind) {
        return {
          message: 'email is already found',
          status: 404,
        };
      }
      const employeecreate = await Users.create({ email, password, role: 'Admin' });

      return {
        message: 'successfully login companies',
        status: 200,
        employee: employeecreate,
        token: {
          accessToken: await admin_genAccessToken(
            employeecreate.id,
            employeecreate.role,
          ),
          refreshToken: await admin_genrefreshToken(
            employeecreate.id,
            employeecreate.role,
          ),
        },
      };
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

export default new ProfileService();
