import reqresinManifest from './reqresin'
import mappersmith from "mappersmith";

mappersmith.Env.USE_PROMISES = true;

export const reqresin = mappersmith.forge(reqresinManifest)

export default { reqresin }
