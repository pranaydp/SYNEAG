import config from "config.json";

export class Webservices {
  static APP_CTX_PATH =
    process.env.NODE_ENV === "production"
      ? config.server.production.SERVER_APPLICATION_CONTEXT_PATH
      : config.server.development.SERVER_APPLICATION_CONTEXT_PATH;
  static NFS_CTX_PATH = config.NFS_APPLICATION_CONTEXT_PATH;

  static FLAG = false;

  static URL_API_LOGIN =
    Webservices.APP_CTX_PATH + "/webservice/external/loginuser";
  static URL_API_COUNTRY =
    Webservices.APP_CTX_PATH + "/webservice/external/countrylist";
 
}
