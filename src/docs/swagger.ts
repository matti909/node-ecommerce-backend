import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "Documentacion Backend",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:4002",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      user: {
        type: "object",
        required: [],
        properties: {
          name: {
            type: "string",
          },
          password: {
            type: "string",
          },
          email: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
