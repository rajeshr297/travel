import {
  amountvalidation, inputvalidation, userlogin, walletaddmoney,
} from '../validator/user.rules';
import validators from '../helper/validate';
import { validationResponse } from './requestHandler';
import logger from './logger';

async function validation(data, rules, req, res, next) {
  await validators(data, rules, {}, (err, status) => {
    if (!status) {
      validationResponse({
        res,
        validation: err.errors,
      });
    } else {
      next();
    }
  }).catch((err) => logger.error(`error validation system ---> ${err.message}`));
}

export const logingvali = async (req, res, next) => {
  await validation(req.body, userlogin, req, res, next);
};

export const inputchargingvali = async (req, res, next) => {
  await validation(req.body, inputvalidation, req, res, next);
};
export const amountchargingvali = async (req, res, next) => {
  await validation(req.body, amountvalidation, req, res, next);
};

export const addmoneyvali = async (req, res, next) => {
  await validation(req.body, walletaddmoney, req, res, next);
};
