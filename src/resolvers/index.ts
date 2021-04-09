import { IResolverObject } from 'apollo-server-express';
import { shortenUrl } from '../lib';

const port = process.env.PORT || 5000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

const Query: IResolverObject = {
  shortenUrl: (_, { url }) => {
    return `${baseUrl}/${shortenUrl(url)}`;
  },
};

export default {
  Query,
};
