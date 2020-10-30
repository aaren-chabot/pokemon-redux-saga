import { DEVEnv } from './environment.dev';
import { QAEnv } from './environment.qa';
import { PRODEnv } from './environment.prod';

let env = {
  CURRENT_ENV: 'base',
  POKEMON_API: 'https://graphql-pokemon2.vercel.app/',
  REACT_APP_IS_LOGGING_ENABLED: false
};

if (process.env.NODE_ENV === 'development') {
  env = Object.assign(env, DEVEnv);
};
if (process.env.NODE_ENV === 'production') {
  env = Object.assign(env, PRODEnv);
};
if (process.env.NODE_ENV === 'test') {
  env = Object.assign(env, QAEnv);
};

export { env };
