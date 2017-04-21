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
    videos: [Video]
  }
  #always have a Schema with a query value with type Query
  type Schema {
    query: Query
  }
`);

const videoA = {
    id: '2',
    title: 'Hello world2!',
    duration: 180,
    watched: true
}

const videoB = {
    id: '3',
    title: 'Hello world3!',
    duration: 360,
    watched: false
}

const videos = [videoA, videoB]

const resolvers = {
    video: () => ({
        id: '1',
        title: 'Hello world!',
        duration: 180,
        watched: true
    }),
    videos: () => videos
};


const query =`
query myFirstQuery{
    videos {
        id,
        title,
        duration,
        watched
    },
}`;

graphql(schema, query, resolvers).then(
    (response) => { response.data.videos.forEach(
        todo => {console.log(todo)}
    )
    })
    .catch( (error) => console.log(error));