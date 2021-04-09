import { UserInputError } from 'apollo-server-errors';
import isURL from 'validator/lib/isURL';
import db from '../db';

export const shortenUrl = (url: string): string => {
  if (!isURL(url)) throw new UserInputError('Invalid URL sent');
  const code = generateCode();
  db.set(code, url);
  return code;
};

const generateCode = () => {
  const code = [];
  for (let i = 0; i < 6; i++) code.push(97 + Math.floor(Math.random() * 26));
  return String.fromCodePoint(...code);
};
