declare module 'swagger-ui-express' {
  import { RequestHandler } from 'express';

  interface SwaggerUiOptions {
    customCss?: string;
    customJs?: string;
    explorer?: boolean;
    swaggerOptions?: object;
  }

  function serve(apiDocs: any, options?: SwaggerUiOptions): RequestHandler;

  function setup(apiDocs: any, options?: SwaggerUiOptions): RequestHandler;

  export {
    serve,
    setup
  };
}