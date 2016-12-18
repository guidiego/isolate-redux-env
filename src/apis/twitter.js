import mappersmith from "mappersmith";

const manifest = {
  host: 'http://reqres.io/api',
  resources: {
    Auth: {},
    Products: {}
  }
}

export default mappersmith.forge(manifest);
