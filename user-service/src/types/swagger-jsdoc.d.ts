declare module 'swagger-jsdoc' {
  import { SwaggerDefinition } from 'swagger-ui-express';
  
  function swaggerJsDoc(options: any): SwaggerDefinition;

  export default swaggerJsDoc;
}