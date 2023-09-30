import io from 'socket.io-client';
import logger from '../middlewares/logger';

const axios = require('axios');

const HYBRID_CONN = 'ec2-18-184-193-217.eu-central-1.compute.amazonaws.com:30081';
export const socketclient = async () => {
  try {
    logger.info('🚀 socket client connection');
    await axios.post(`http://${HYBRID_CONN}/login`, {
      username: 'indoor',
      password: 'indoor',
      force: true,
    }).then(async (res) => {
      console.log(res);
      const token = res.data.data.access_token;
      // const socket = io(`ws://${HYBRID_CONN}/subscribe?token=${token}`);
      await axios
        .get(`http://${HYBRID_CONN}/tags`, {
          headers: {
            authkey: token,
          },
        })
        .then((responseAllTags) => {
          this.allTags = responseAllTags.data;
          console.log('tags api called');
        })
        .catch((err) => {
          console.log(err.message);
        });
      this._registerListeners();
      this._deregisterListeners();
    });
  } catch (error) {
    logger.error(error.message);
  }
};
