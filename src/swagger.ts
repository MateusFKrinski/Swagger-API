import swaggerJsDoc from "swagger-jsdoc";

const swaggerSpec = swaggerJsDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Book API",
            version: "1.0.0",
            description: "CRUD Book API",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: [
        `${__dirname}/auth/auth.routes.ts`,
        `${__dirname}/routes.ts`,
    ],
});

export default swaggerSpec;