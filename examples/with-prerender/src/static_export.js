import { render as afterRender, renderStatic } from '@jaredpalmer/after';
import { default as afterRoutes } from './routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST);

export const render = async (req, res) => {
  try {
    const { html, data } = await renderStatic({
      req,
      res,
      routes,
      assets,
      chunks,
    });
    res.json({ html, data });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const routes = () => {
  return ['/', '/about'];
};
