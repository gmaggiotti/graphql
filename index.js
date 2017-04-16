/**
 * Created by gabe on 16/04/17.
 */
'use strict';
const {graphql, buildSchema} = require('graphql');


var schema = buildSchema(`
  type Query {
    hello: String
  }
  type Schema {
  query: Query
  }
`);

var resolvers = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', resolvers).then(
    (response) => console.log(response))
    .catch( (error) => console.log(error));