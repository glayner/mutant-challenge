const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Mutant desafio',
    contact: {},
    version: '1.0',
  },
  servers: [
    {
      url: '/',
      variables: {},
    },
  ],
  paths: {
    '/result': {
      get: {
        tags: ['result'],
        summary: 'list results',
        description:
          'lista os dados retornados de https://jsonplaceholder.typicode.com/users',
        operationId: 'listresults',
        parameters: [],
        responses: {
          '200': {
            description: '',
            headers: {
              'Content-Security-Policy': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example:
                      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                  },
                },
              },
              'X-DNS-Prefetch-Control': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'off',
                  },
                },
              },
              'Expect-CT': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'max-age=0',
                  },
                },
              },
              'X-Frame-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'SAMEORIGIN',
                  },
                },
              },
              'Strict-Transport-Security': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'max-age=15552000; includeSubDomains',
                  },
                },
              },
              'X-Download-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'noopen',
                  },
                },
              },
              'X-Content-Type-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'nosniff',
                  },
                },
              },
              'X-Permitted-Cross-Domain-Policies': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'none',
                  },
                },
              },
              'Referrer-Policy': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'no-referrer',
                  },
                },
              },
              'X-XSS-Protection': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '0',
                  },
                },
              },
              'Access-Control-Allow-Origin': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '*',
                  },
                },
              },
              'Content-Length': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '4094',
                  },
                },
              },
              ETag: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'W/"ffe-pIwTiwssQ4FJ+1t7qtPH/vMBmw0"',
                  },
                },
              },
              Date: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'Mon, 05 Oct 2020 05:18:43 GMT',
                  },
                },
              },
              Connection: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'keep-alive',
                  },
                },
              },
            },
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/listresult',
                  },
                },
                example: [
                  {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                    address: {
                      street: 'Kulas Light',
                      suite: 'Apt. 556',
                      city: 'Gwenborough',
                      zipcode: '92998-3874',
                      geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                      },
                    },
                    phone: '1-770-736-8031 x56442',
                    website: 'hildegard.org',
                    company: {
                      name: 'Romaguera-Crona',
                      catchPhrase: 'Multi-layered client-server neural-net',
                      bs: 'harness real-time e-markets',
                    },
                  },
                  {
                    id: 2,
                    name: 'Ervin Howell',
                    username: 'Antonette',
                    email: 'Shanna@melissa.tv',
                    address: {
                      street: 'Victor Plains',
                      suite: 'Suite 879',
                      city: 'Wisokyburgh',
                      zipcode: '90566-7771',
                      geo: {
                        lat: '-43.9509',
                        lng: '-34.4618',
                      },
                    },
                    phone: '010-692-6593 x09125',
                    website: 'anastasia.net',
                    company: {
                      name: 'Deckow-Crist',
                      catchPhrase: 'Proactive didactic contingency',
                      bs: 'synergize scalable supply-chains',
                    },
                  },
                  {
                    id: 3,
                    name: 'Clementine Bauch',
                    username: 'Samantha',
                    email: 'Nathan@yesenia.net',
                    address: {
                      street: 'Douglas Extension',
                      suite: 'Suite 847',
                      city: 'McKenziehaven',
                      zipcode: '59590-4157',
                      geo: {
                        lat: '-68.6102',
                        lng: '-47.0653',
                      },
                    },
                    phone: '1-463-123-4447',
                    website: 'ramiro.info',
                    company: {
                      name: 'Romaguera-Jacobson',
                      catchPhrase: 'Face to face bifurcated interface',
                      bs: 'e-enable strategic applications',
                    },
                  },
                  {
                    id: 4,
                    name: 'Patricia Lebsack',
                    username: 'Karianne',
                    email: 'Julianne.OConner@kory.org',
                    address: {
                      street: 'Hoeger Mall',
                      suite: 'Apt. 692',
                      city: 'South Elvis',
                      zipcode: '53919-4257',
                      geo: {
                        lat: '29.4572',
                        lng: '-164.2990',
                      },
                    },
                    phone: '493-170-9623 x156',
                    website: 'kale.biz',
                    company: {
                      name: 'Robel-Corkery',
                      catchPhrase: 'Multi-tiered zero tolerance productivity',
                      bs: 'transition cutting-edge web services',
                    },
                  },
                  {
                    id: 5,
                    name: 'Chelsey Dietrich',
                    username: 'Kamren',
                    email: 'Lucio_Hettinger@annie.ca',
                    address: {
                      street: 'Skiles Walks',
                      suite: 'Suite 351',
                      city: 'Roscoeview',
                      zipcode: '33263',
                      geo: {
                        lat: '-31.8129',
                        lng: '62.5342',
                      },
                    },
                    phone: '(254)954-1289',
                    website: 'demarco.info',
                    company: {
                      name: 'Keebler LLC',
                      catchPhrase: 'User-centric fault-tolerant solution',
                      bs: 'revolutionize end-to-end systems',
                    },
                  },
                  {
                    id: 6,
                    name: 'Mrs. Dennis Schulist',
                    username: 'Leopoldo_Corkery',
                    email: 'Karley_Dach@jasper.info',
                    address: {
                      street: 'Norberto Crossing',
                      suite: 'Apt. 950',
                      city: 'South Christy',
                      zipcode: '23505-1337',
                      geo: {
                        lat: '-71.4197',
                        lng: '71.7478',
                      },
                    },
                    phone: '1-477-935-8478 x6430',
                    website: 'ola.org',
                    company: {
                      name: 'Considine-Lockman',
                      catchPhrase: 'Synchronised bottom-line interface',
                      bs: 'e-enable innovative applications',
                    },
                  },
                  {
                    id: 7,
                    name: 'Kurtis Weissnat',
                    username: 'Elwyn.Skiles',
                    email: 'Telly.Hoeger@billy.biz',
                    address: {
                      street: 'Rex Trail',
                      suite: 'Suite 280',
                      city: 'Howemouth',
                      zipcode: '58804-1099',
                      geo: {
                        lat: '24.8918',
                        lng: '21.8984',
                      },
                    },
                    phone: '210.067.6132',
                    website: 'elvis.io',
                    company: {
                      name: 'Johns Group',
                      catchPhrase: 'Configurable multimedia task-force',
                      bs: 'generate enterprise e-tailers',
                    },
                  },
                  {
                    id: 8,
                    name: 'Nicholas Runolfsdottir V',
                    username: 'Maxime_Nienow',
                    email: 'Sherwood@rosamond.me',
                    address: {
                      street: 'Ellsworth Summit',
                      suite: 'Suite 729',
                      city: 'Aliyaview',
                      zipcode: '45169',
                      geo: {
                        lat: '-14.3990',
                        lng: '-120.7677',
                      },
                    },
                    phone: '586.493.6943 x140',
                    website: 'jacynthe.com',
                    company: {
                      name: 'Abernathy Group',
                      catchPhrase: 'Implemented secondary concept',
                      bs: 'e-enable extensible e-tailers',
                    },
                  },
                  {
                    id: 9,
                    name: 'Glenna Reichert',
                    username: 'Delphine',
                    email: 'Chaim_McDermott@dana.io',
                    address: {
                      street: 'Dayna Park',
                      suite: 'Suite 449',
                      city: 'Bartholomebury',
                      zipcode: '76495-3109',
                      geo: {
                        lat: '24.6463',
                        lng: '-168.8889',
                      },
                    },
                    phone: '(775)976-6794 x41206',
                    website: 'conrad.com',
                    company: {
                      name: 'Yost and Sons',
                      catchPhrase: 'Switchable contextually-based project',
                      bs: 'aggregate real-time technologies',
                    },
                  },
                  {
                    id: 10,
                    name: 'Clementina DuBuque',
                    username: 'Moriah.Stanton',
                    email: 'Rey.Padberg@karina.biz',
                    address: {
                      street: 'Kattie Turnpike',
                      suite: 'Suite 198',
                      city: 'Lebsackbury',
                      zipcode: '31428-2261',
                      geo: {
                        lat: '-38.2386',
                        lng: '57.2232',
                      },
                    },
                    phone: '024-648-3804',
                    website: 'ambrose.net',
                    company: {
                      name: 'Hoeger LLC',
                      catchPhrase: 'Centralized empowering task-force',
                      bs: 'target end-to-end models',
                    },
                  },
                ],
              },
            },
          },
        },
        deprecated: false,
      },
      post: {
        tags: ['result'],
        summary: 'create users by result',
        description:
          'salva os dados no banco, podendo repeti-los ou não de acordo com o valor booleano "notRepeat"',
        operationId: 'createusersbyresult',
        parameters: [],
        requestBody: {
          description: '',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/createusersbyresultrequest',
              },
              example: {
                notRepeat: true,
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: '',
            headers: {
              'Content-Security-Policy': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example:
                      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                  },
                },
              },
              'X-DNS-Prefetch-Control': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'off',
                  },
                },
              },
              'Expect-CT': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'max-age=0',
                  },
                },
              },
              'X-Frame-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'SAMEORIGIN',
                  },
                },
              },
              'Strict-Transport-Security': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'max-age=15552000; includeSubDomains',
                  },
                },
              },
              'X-Download-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'noopen',
                  },
                },
              },
              'X-Content-Type-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'nosniff',
                  },
                },
              },
              'X-Permitted-Cross-Domain-Policies': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'none',
                  },
                },
              },
              'Referrer-Policy': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'no-referrer',
                  },
                },
              },
              'X-XSS-Protection': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '0',
                  },
                },
              },
              'Access-Control-Allow-Origin': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '*',
                  },
                },
              },
              'Content-Length': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '3553',
                  },
                },
              },
              ETag: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'W/"de1-+FpVBBPujLe3OMOLe7T58HF266g"',
                  },
                },
              },
              Date: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'Mon, 05 Oct 2020 05:19:13 GMT',
                  },
                },
              },
              Connection: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'keep-alive',
                  },
                },
              },
            },
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/createbyresult',
                  },
                },
                example: [
                  {
                    name: 'Nicholas Runolfsdottir V',
                    username: 'Maxime_Nienow',
                    address: {
                      id: 2,
                      street: 'Ellsworth Summit',
                      suite: 'Suite 729',
                      city: 'Aliyaview',
                      zipcode: '45169',
                      created_at: '2020-10-05T08:19:13.401Z',
                      updated_at: '2020-10-05T08:19:13.401Z',
                    },
                    contact: {
                      id: 1,
                      email: 'Sherwood@rosamond.me',
                      phone: '586.493.6943 x140',
                      website: 'jacynthe.com',
                      created_at: '2020-10-05T08:19:13.472Z',
                      updated_at: '2020-10-05T08:19:13.472Z',
                    },
                    id: 1,
                    created_at: '2020-10-05T08:19:13.533Z',
                    updated_at: '2020-10-05T08:19:13.533Z',
                  },
                  {
                    name: 'Ervin Howell',
                    username: 'Antonette',
                    address: {
                      id: 1,
                      street: 'Victor Plains',
                      suite: 'Suite 879',
                      city: 'Wisokyburgh',
                      zipcode: '90566-7771',
                      created_at: '2020-10-05T08:19:13.398Z',
                      updated_at: '2020-10-05T08:19:13.398Z',
                    },
                    contact: {
                      id: 4,
                      email: 'Shanna@melissa.tv',
                      phone: '010-692-6593 x09125',
                      website: 'anastasia.net',
                      created_at: '2020-10-05T08:19:13.505Z',
                      updated_at: '2020-10-05T08:19:13.505Z',
                    },
                    id: 2,
                    created_at: '2020-10-05T08:19:13.539Z',
                    updated_at: '2020-10-05T08:19:13.539Z',
                  },
                  {
                    name: 'Kurtis Weissnat',
                    username: 'Elwyn.Skiles',
                    address: {
                      id: 3,
                      street: 'Rex Trail',
                      suite: 'Suite 280',
                      city: 'Howemouth',
                      zipcode: '58804-1099',
                      created_at: '2020-10-05T08:19:13.425Z',
                      updated_at: '2020-10-05T08:19:13.425Z',
                    },
                    contact: {
                      id: 2,
                      email: 'Telly.Hoeger@billy.biz',
                      phone: '210.067.6132',
                      website: 'elvis.io',
                      created_at: '2020-10-05T08:19:13.487Z',
                      updated_at: '2020-10-05T08:19:13.487Z',
                    },
                    id: 3,
                    created_at: '2020-10-05T08:19:13.544Z',
                    updated_at: '2020-10-05T08:19:13.544Z',
                  },
                  {
                    name: 'Chelsey Dietrich',
                    username: 'Kamren',
                    address: {
                      id: 4,
                      street: 'Skiles Walks',
                      suite: 'Suite 351',
                      city: 'Roscoeview',
                      zipcode: '33263',
                      created_at: '2020-10-05T08:19:13.429Z',
                      updated_at: '2020-10-05T08:19:13.429Z',
                    },
                    contact: {
                      id: 3,
                      email: 'Lucio_Hettinger@annie.ca',
                      phone: '(254)954-1289',
                      website: 'demarco.info',
                      created_at: '2020-10-05T08:19:13.495Z',
                      updated_at: '2020-10-05T08:19:13.495Z',
                    },
                    id: 4,
                    created_at: '2020-10-05T08:19:13.558Z',
                    updated_at: '2020-10-05T08:19:13.558Z',
                  },
                  {
                    name: 'Clementina DuBuque',
                    username: 'Moriah.Stanton',
                    address: {
                      id: 6,
                      street: 'Kattie Turnpike',
                      suite: 'Suite 198',
                      city: 'Lebsackbury',
                      zipcode: '31428-2261',
                      created_at: '2020-10-05T08:19:13.436Z',
                      updated_at: '2020-10-05T08:19:13.436Z',
                    },
                    contact: {
                      id: 6,
                      email: 'Rey.Padberg@karina.biz',
                      phone: '024-648-3804',
                      website: 'ambrose.net',
                      created_at: '2020-10-05T08:19:13.514Z',
                      updated_at: '2020-10-05T08:19:13.514Z',
                    },
                    id: 5,
                    created_at: '2020-10-05T08:19:13.571Z',
                    updated_at: '2020-10-05T08:19:13.571Z',
                  },
                  {
                    name: 'Clementine Bauch',
                    username: 'Samantha',
                    address: {
                      id: 5,
                      street: 'Douglas Extension',
                      suite: 'Suite 847',
                      city: 'McKenziehaven',
                      zipcode: '59590-4157',
                      created_at: '2020-10-05T08:19:13.433Z',
                      updated_at: '2020-10-05T08:19:13.433Z',
                    },
                    contact: {
                      id: 5,
                      email: 'Nathan@yesenia.net',
                      phone: '1-463-123-4447',
                      website: 'ramiro.info',
                      created_at: '2020-10-05T08:19:13.507Z',
                      updated_at: '2020-10-05T08:19:13.507Z',
                    },
                    id: 6,
                    created_at: '2020-10-05T08:19:13.582Z',
                    updated_at: '2020-10-05T08:19:13.582Z',
                  },
                  {
                    name: 'Glenna Reichert',
                    username: 'Delphine',
                    address: {
                      id: 7,
                      street: 'Dayna Park',
                      suite: 'Suite 449',
                      city: 'Bartholomebury',
                      zipcode: '76495-3109',
                      created_at: '2020-10-05T08:19:13.475Z',
                      updated_at: '2020-10-05T08:19:13.475Z',
                    },
                    contact: {
                      id: 7,
                      email: 'Chaim_McDermott@dana.io',
                      phone: '(775)976-6794 x41206',
                      website: 'conrad.com',
                      created_at: '2020-10-05T08:19:13.545Z',
                      updated_at: '2020-10-05T08:19:13.545Z',
                    },
                    id: 7,
                    created_at: '2020-10-05T08:19:13.597Z',
                    updated_at: '2020-10-05T08:19:13.597Z',
                  },
                ],
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/user': {
      get: {
        tags: ['user'],
        summary: 'list users',
        description: 'lista todos os usuários salvos',
        operationId: 'listusers',
        parameters: [],
        responses: {
          '200': {
            description: '',
            headers: {
              'Content-Security-Policy': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example:
                      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                  },
                },
              },
              'X-DNS-Prefetch-Control': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'off',
                  },
                },
              },
              'Expect-CT': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'max-age=0',
                  },
                },
              },
              'X-Frame-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'SAMEORIGIN',
                  },
                },
              },
              'Strict-Transport-Security': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'max-age=15552000; includeSubDomains',
                  },
                },
              },
              'X-Download-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'noopen',
                  },
                },
              },
              'X-Content-Type-Options': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'nosniff',
                  },
                },
              },
              'X-Permitted-Cross-Domain-Policies': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'none',
                  },
                },
              },
              'Referrer-Policy': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'no-referrer',
                  },
                },
              },
              'X-XSS-Protection': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '0',
                  },
                },
              },
              'Access-Control-Allow-Origin': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '*',
                  },
                },
              },
              'Content-Length': {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: '3553',
                  },
                },
              },
              ETag: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'W/"de1-mp5Umvj4b9AlZTgTuZo+OXJsJH8"',
                  },
                },
              },
              Date: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'Mon, 05 Oct 2020 05:19:37 GMT',
                  },
                },
              },
              Connection: {
                content: {
                  'text/plain': {
                    schema: {
                      type: 'string',
                    },
                    example: 'keep-alive',
                  },
                },
              },
            },
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/listuser',
                  },
                },
                example: [
                  {
                    id: 1,
                    name: 'Nicholas Runolfsdottir V',
                    username: 'Maxime_Nienow',
                    created_at: '2020-10-05T08:19:13.533Z',
                    updated_at: '2020-10-05T08:19:13.533Z',
                    contact: {
                      id: 1,
                      email: 'Sherwood@rosamond.me',
                      phone: '586.493.6943 x140',
                      website: 'jacynthe.com',
                      created_at: '2020-10-05T08:19:13.472Z',
                      updated_at: '2020-10-05T08:19:13.472Z',
                    },
                    address: {
                      id: 2,
                      street: 'Ellsworth Summit',
                      suite: 'Suite 729',
                      city: 'Aliyaview',
                      zipcode: '45169',
                      created_at: '2020-10-05T08:19:13.401Z',
                      updated_at: '2020-10-05T08:19:13.401Z',
                    },
                  },
                  {
                    id: 2,
                    name: 'Ervin Howell',
                    username: 'Antonette',
                    created_at: '2020-10-05T08:19:13.539Z',
                    updated_at: '2020-10-05T08:19:13.539Z',
                    contact: {
                      id: 4,
                      email: 'Shanna@melissa.tv',
                      phone: '010-692-6593 x09125',
                      website: 'anastasia.net',
                      created_at: '2020-10-05T08:19:13.505Z',
                      updated_at: '2020-10-05T08:19:13.505Z',
                    },
                    address: {
                      id: 1,
                      street: 'Victor Plains',
                      suite: 'Suite 879',
                      city: 'Wisokyburgh',
                      zipcode: '90566-7771',
                      created_at: '2020-10-05T08:19:13.398Z',
                      updated_at: '2020-10-05T08:19:13.398Z',
                    },
                  },
                  {
                    id: 3,
                    name: 'Kurtis Weissnat',
                    username: 'Elwyn.Skiles',
                    created_at: '2020-10-05T08:19:13.544Z',
                    updated_at: '2020-10-05T08:19:13.544Z',
                    contact: {
                      id: 2,
                      email: 'Telly.Hoeger@billy.biz',
                      phone: '210.067.6132',
                      website: 'elvis.io',
                      created_at: '2020-10-05T08:19:13.487Z',
                      updated_at: '2020-10-05T08:19:13.487Z',
                    },
                    address: {
                      id: 3,
                      street: 'Rex Trail',
                      suite: 'Suite 280',
                      city: 'Howemouth',
                      zipcode: '58804-1099',
                      created_at: '2020-10-05T08:19:13.425Z',
                      updated_at: '2020-10-05T08:19:13.425Z',
                    },
                  },
                  {
                    id: 4,
                    name: 'Chelsey Dietrich',
                    username: 'Kamren',
                    created_at: '2020-10-05T08:19:13.558Z',
                    updated_at: '2020-10-05T08:19:13.558Z',
                    contact: {
                      id: 3,
                      email: 'Lucio_Hettinger@annie.ca',
                      phone: '(254)954-1289',
                      website: 'demarco.info',
                      created_at: '2020-10-05T08:19:13.495Z',
                      updated_at: '2020-10-05T08:19:13.495Z',
                    },
                    address: {
                      id: 4,
                      street: 'Skiles Walks',
                      suite: 'Suite 351',
                      city: 'Roscoeview',
                      zipcode: '33263',
                      created_at: '2020-10-05T08:19:13.429Z',
                      updated_at: '2020-10-05T08:19:13.429Z',
                    },
                  },
                  {
                    id: 5,
                    name: 'Clementina DuBuque',
                    username: 'Moriah.Stanton',
                    created_at: '2020-10-05T08:19:13.571Z',
                    updated_at: '2020-10-05T08:19:13.571Z',
                    contact: {
                      id: 6,
                      email: 'Rey.Padberg@karina.biz',
                      phone: '024-648-3804',
                      website: 'ambrose.net',
                      created_at: '2020-10-05T08:19:13.514Z',
                      updated_at: '2020-10-05T08:19:13.514Z',
                    },
                    address: {
                      id: 6,
                      street: 'Kattie Turnpike',
                      suite: 'Suite 198',
                      city: 'Lebsackbury',
                      zipcode: '31428-2261',
                      created_at: '2020-10-05T08:19:13.436Z',
                      updated_at: '2020-10-05T08:19:13.436Z',
                    },
                  },
                  {
                    id: 6,
                    name: 'Clementine Bauch',
                    username: 'Samantha',
                    created_at: '2020-10-05T08:19:13.582Z',
                    updated_at: '2020-10-05T08:19:13.582Z',
                    contact: {
                      id: 5,
                      email: 'Nathan@yesenia.net',
                      phone: '1-463-123-4447',
                      website: 'ramiro.info',
                      created_at: '2020-10-05T08:19:13.507Z',
                      updated_at: '2020-10-05T08:19:13.507Z',
                    },
                    address: {
                      id: 5,
                      street: 'Douglas Extension',
                      suite: 'Suite 847',
                      city: 'McKenziehaven',
                      zipcode: '59590-4157',
                      created_at: '2020-10-05T08:19:13.433Z',
                      updated_at: '2020-10-05T08:19:13.433Z',
                    },
                  },
                  {
                    id: 7,
                    name: 'Glenna Reichert',
                    username: 'Delphine',
                    created_at: '2020-10-05T08:19:13.597Z',
                    updated_at: '2020-10-05T08:19:13.597Z',
                    contact: {
                      id: 7,
                      email: 'Chaim_McDermott@dana.io',
                      phone: '(775)976-6794 x41206',
                      website: 'conrad.com',
                      created_at: '2020-10-05T08:19:13.545Z',
                      updated_at: '2020-10-05T08:19:13.545Z',
                    },
                    address: {
                      id: 7,
                      street: 'Dayna Park',
                      suite: 'Suite 449',
                      city: 'Bartholomebury',
                      zipcode: '76495-3109',
                      created_at: '2020-10-05T08:19:13.475Z',
                      updated_at: '2020-10-05T08:19:13.475Z',
                    },
                  },
                ],
              },
            },
          },
        },
        deprecated: false,
      },
    },
  },
  components: {
    schemas: {
      listresult: {
        title: 'listresult',
        required: [
          'id',
          'name',
          'username',
          'email',
          'address',
          'phone',
          'website',
          'company',
        ],
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
          },
          name: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          address: {
            $ref: '#/components/schemas/Address',
          },
          phone: {
            type: 'string',
          },
          website: {
            type: 'string',
          },
          company: {
            $ref: '#/components/schemas/Company',
          },
        },
        example: {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
      },
      Address: {
        title: 'Address',
        required: ['street', 'suite', 'city', 'zipcode', 'geo'],
        type: 'object',
        properties: {
          street: {
            type: 'string',
          },
          suite: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          zipcode: {
            type: 'string',
          },
          geo: {
            $ref: '#/components/schemas/Geo',
          },
        },
        example: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
      },
      Geo: {
        title: 'Geo',
        required: ['lat', 'lng'],
        type: 'object',
        properties: {
          lat: {
            type: 'string',
          },
          lng: {
            type: 'string',
          },
        },
        example: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      Company: {
        title: 'Company',
        required: ['name', 'catchPhrase', 'bs'],
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          catchPhrase: {
            type: 'string',
          },
          bs: {
            type: 'string',
          },
        },
        example: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      createusersbyresultrequest: {
        title: 'createusersbyresultrequest',
        required: ['notRepeat'],
        type: 'object',
        properties: {
          notRepeat: {
            type: 'boolean',
          },
        },
        example: {
          notRepeat: true,
        },
      },
      createbyresult: {
        title: 'createbyresult',
        required: [
          'name',
          'username',
          'address',
          'contact',
          'id',
          'created_at',
          'updated_at',
        ],
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          address: {
            $ref: '#/components/schemas/Address1',
          },
          contact: {
            $ref: '#/components/schemas/Contact',
          },
          id: {
            type: 'integer',
            format: 'int32',
          },
          created_at: {
            type: 'string',
          },
          updated_at: {
            type: 'string',
          },
        },
        example: {
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          address: {
            id: 2,
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            created_at: '2020-10-05T08:19:13.401Z',
            updated_at: '2020-10-05T08:19:13.401Z',
          },
          contact: {
            id: 1,
            email: 'Sherwood@rosamond.me',
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            created_at: '2020-10-05T08:19:13.472Z',
            updated_at: '2020-10-05T08:19:13.472Z',
          },
          id: 1,
          created_at: '2020-10-05T08:19:13.533Z',
          updated_at: '2020-10-05T08:19:13.533Z',
        },
      },
      Address1: {
        title: 'Address1',
        required: [
          'id',
          'street',
          'suite',
          'city',
          'zipcode',
          'created_at',
          'updated_at',
        ],
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
          },
          street: {
            type: 'string',
          },
          suite: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          zipcode: {
            type: 'string',
          },
          created_at: {
            type: 'string',
          },
          updated_at: {
            type: 'string',
          },
        },
        example: {
          id: 2,
          street: 'Ellsworth Summit',
          suite: 'Suite 729',
          city: 'Aliyaview',
          zipcode: '45169',
          created_at: '2020-10-05T08:19:13.401Z',
          updated_at: '2020-10-05T08:19:13.401Z',
        },
      },
      Contact: {
        title: 'Contact',
        required: [
          'id',
          'email',
          'phone',
          'website',
          'created_at',
          'updated_at',
        ],
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          website: {
            type: 'string',
          },
          created_at: {
            type: 'string',
          },
          updated_at: {
            type: 'string',
          },
        },
        example: {
          id: 1,
          email: 'Sherwood@rosamond.me',
          phone: '586.493.6943 x140',
          website: 'jacynthe.com',
          created_at: '2020-10-05T08:19:13.472Z',
          updated_at: '2020-10-05T08:19:13.472Z',
        },
      },
      listuser: {
        title: 'listuser',
        required: [
          'id',
          'name',
          'username',
          'created_at',
          'updated_at',
          'contact',
          'address',
        ],
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
          },
          name: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          created_at: {
            type: 'string',
          },
          updated_at: {
            type: 'string',
          },
          contact: {
            $ref: '#/components/schemas/Contact',
          },
          address: {
            $ref: '#/components/schemas/Address1',
          },
        },
        example: {
          id: 1,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          created_at: '2020-10-05T08:19:13.533Z',
          updated_at: '2020-10-05T08:19:13.533Z',
          contact: {
            id: 1,
            email: 'Sherwood@rosamond.me',
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            created_at: '2020-10-05T08:19:13.472Z',
            updated_at: '2020-10-05T08:19:13.472Z',
          },
          address: {
            id: 2,
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            created_at: '2020-10-05T08:19:13.401Z',
            updated_at: '2020-10-05T08:19:13.401Z',
          },
        },
      },
    },
  },
  tags: [
    {
      name: 'result',
      description:
        'busca os dados de https://jsonplaceholder.typicode.com/users e salva no banco',
    },
    {
      name: 'user',
      description: 'plus: buscar os dados do banco\n',
    },
  ],
};

export default swaggerDocument;
