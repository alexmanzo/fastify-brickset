import fp from 'fastify-plugin';
import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { FastifyPluginAsync } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    axios: AxiosInstance
  }
}

const fastifyAxios: FastifyPluginAsync<CreateAxiosDefaults> = async (fastify, options) => {
  const instance = axios.create(options);
  instance.interceptors.request.use((config) => {
    config.params.apiKey = process.env.BRICKSET_API_KEY;
    return config;
  });
  fastify.decorateRequest('axios', instance);
};

export default fp(fastifyAxios);
