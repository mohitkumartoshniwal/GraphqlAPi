const {ApolloServer}=require('apollo-server');

const mongoose= require('mongoose');
const Post=require('./models/Post');
const {MONGODB} =require('./config');
const resolvers=require('./graphql/resolvers')
const typeDefs=require('./graphql/typeDefs')

const server =new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})



mongoose.connect(MONGODB, { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log("Mongodb connected");
    return server.listen({port:4000});
})
.then(res=>console.log(`server running at ${res.url}`))

