/**
 * Created by gabe on 16/04/17.
 */
'use strict';
const {graphql, buildSchema} = require('graphql');


var schema = buildSchema(`
  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }
  
  type Query {
    video: Video
  }
  
  type Schema {
    query: Query
  }
`);

const resolvers = {
    video: () => ({
        id: '1',
        title: 'Hello world!',
        duration: 180,
        watched: true
    })
};

const query =`
query myFirstQuery{
    video {
        id,
        title,
        duration,
        watched
    }
}`;

graphql(schema, query, resolvers).then(
    (response) => console.log(response))
    .catch( (error) => console.log(error));