require('dotenv').config();

module.exports = {
  otp: {
    OTP_LENGTH: 7,
    OTP_CONFIG: {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    },
  },
  db: {
    str: process.env.Database_url,
    options: {
      maxPoolSize: 10, // Maintain up to 10 socket connections
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  awsconfig: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  },
};
