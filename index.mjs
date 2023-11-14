import express from 'express';
import next from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

async function startServer() {
  try {
    await app.prepare();
  } catch (err) {
    console.error('Error during app preparation:', err.message);
    process.exit(1);
  }

  const server = express();

  server.get('/', (req, res) => {
    res.send('Hello World!');
  });

  server.get('/about', async (req, res) => {
    try {
      const { query } = parse(req.url, true);
      await app.render(req, res, '/about', query);
    } catch (err) {
      console.error('Error occurred handling /about:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.get('/api/greet', (req, res) => {
    res.json({ name: req.query?.name ?? 'unknown' });
  });

  server.get('/_next/*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Error handling middleware
  server.use((err, req, res, next) => {
    console.error('Error during request:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  server.listen(port, () => {
    console.log(`🚀 > Ready on http://localhost:${port}`);
  });
}

startServer();
