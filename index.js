/**
 * Created by gabe on 16/04/17.
 */
'use strict';
const {graphql, buildSchema} = require('graphql');


var schema = buildSchema(`
  type Query {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }
  type Schema {
  query: Query
  }
`);

const resolvers = {
    id: () => '1',
    title: () => 'Hello world!',
    duration: () => 180,
    watched: () => true
};

graphql(schema, '{ id title duration watched }', resolvers).then(
    (response) => console.log(response))
    .catch( (error) => console.log(error));