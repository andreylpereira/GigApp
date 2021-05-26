import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'GigAPI',
        description: 'Documentação automaticamente gerada por <b>swagger-autogen</b>',
    },
    host: 'localhost:3001',
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "jwt",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
    definitions: {
        Userres: {
            name: "Jhon Doe",
            age: 29,
            parents: {
                father: "Simon Doe",
                mother: "Marie Doe"
            },
            diplomas: [
                {
                    school: "XYZ University",
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: "XYZ Company"
                    }
                }
            ]
        },
        AddUser: {
            $name: "Jhon Doe",
            $age: 29,
            about: ""
        }
    }
}

const options = {
    openapi: "3.0.0",
}

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(options)(outputFile, endpointsFiles, doc).then(async () => {
    await import('./src/app.js').catch(error => {
        console.error("deu ruim", error.message);
    });
});