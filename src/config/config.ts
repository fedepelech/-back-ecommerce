import dotenv from 'dotenv';
dotenv.config();

const {
  PORT,
  NB_USER,
  NB_PASSWORD
} = process.env;

export const ENVIRONMENT_VARIABLES = {
  PORT: Number(PORT) || 3000,
  //encriptar estos valores
  NB_USER,
  NB_PASSWORD
};
