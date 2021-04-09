import expressPlayground from 'graphql-playground-middleware-express';
import { Router } from 'express';
import db from '../db';
import path from 'path';

const router = Router();

router.get('/graphiql', expressPlayground({ endpoint: '/graphql' }));

// Resolve shortened url
router.get(
  '/:urlCode',
  (req, res, next) => {
    const code = req.params.urlCode;
    const url = db.get(code);
    if (url) res.redirect(url);
    else next();
  },
  (_, res) => {
    res.sendFile(path.join(process.cwd(), 'public/index.html'));
  }
);

router.get('*', (req, res) => {
  res.redirect('/graphiql');
});

export default router;
