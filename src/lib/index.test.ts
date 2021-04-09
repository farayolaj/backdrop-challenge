import { shortenUrl } from './index';
import { UserInputError } from 'apollo-server-express';

const validURL = 'https://google.com';
const invalidURL = 'https://googledotcom';

test('URL is valid', () => {
  expect(shortenUrl(validURL)).toMatch(/^[a-z]{6}$/);
});

test('URL is not valid', () => {
  expect(() => shortenUrl(invalidURL)).toThrowError(UserInputError);
});
