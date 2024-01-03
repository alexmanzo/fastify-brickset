import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});
const port = Number(process.env.PORT) || 3000;

// plugins from ecosystem
// custom plugins
// decorators
// hooks
// my services

fastify.listen({ port },(err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
 
  fastify.log.info(`Fastify is listening on port: ${address}`);
});
