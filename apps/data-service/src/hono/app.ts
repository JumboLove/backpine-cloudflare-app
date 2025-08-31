import { getLink } from '@repo/data-ops/queries/links';
import { Hono } from 'hono';

export const App = new Hono<{ Bindings: Env }>();

App.get('/:id', async (c) => {
	const { id } = c.req.param();
	const linkDatafromDb = await getLink(id);
	return c.json({ linkDatafromDb });
});
