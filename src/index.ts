import Fastify from 'fastify';
import fastifySoapClient from '@fastify/soap-client';

const fastify = Fastify({
  logger: true,
});
const port = Number(process.env.PORT) || 3000;

// plugins from ecosystem
// custom plugins
// decorators
// hooks
// my services
fastify.get('/', function (request, reply) {
  reply.send('cool!')
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
