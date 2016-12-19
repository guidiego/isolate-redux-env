import mappersmith from 'mappersmith';
import reqresinManifest from './reqresin';

mappersmith.Env.USE_PROMISES = true;

export const reqresin = mappersmith.forge(reqresinManifest);

export default { reqresin };
