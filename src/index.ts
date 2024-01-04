import { AxiosRequestConfig } from 'axios';
import Fastify from 'fastify';
import fastifyAxios from './plugins/axios';

const fastify = Fastify({
  logger: true,
});
const port = Number(process.env.PORT) || 3000;

// plugins from ecosystem

// custom plugins
fastify.register(fastifyAxios, {
  baseURL: 'https://brickset.com/api/v3.asmx',
});

// decorators
// hooks
// my services
fastify.get<{ Querystring: GetSetsParams }>('/sets', async function (request, reply) {
  const stringifiedParams = JSON.stringify(request.query);
  // fastify.log.info(`stringifiedParams: ${stringifiedParams}`);
  // const bricksetRequest = request.axios.get('/getSets', { params: { userHash: '', params: `{'year':'2020','orderBy':'Pieces','pageSize':100}` }});
  reply.send(stringifiedParams);
});

// brickset login
// checkKey
// checkUserHash

// getSets
// getSets Params: setId, query, theme, subtheme, setNumber, year, tag, owned, wanted, updatedSince, orderBy, pageSize, pageNumber, extendedData
// getThemes
// getSubthemes (for a given theme)
// getYears (for a given theme)

// setCollection
// setCollection Params: own, want, qtyOwned, notes, rating
// getUserNotes

fastify.listen({ port }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`Fastify is listening on port: ${address}`);
});
