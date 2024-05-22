import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;

app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'User API',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-license-key',
          description: 'need for api keys'
        }
      }
    },
    security: [{
      apiKeyAuth: []
    }]
  },
  apis: ['./src/controllers/*.ts']
};

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', routes);

createConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => console.log(error));