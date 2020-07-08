import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import mongoose from 'mongoose'
import { Mongo } from '@accounts/mongo'
import { mergeTypeDefs, mergeResolvers } from '@graphql-toolkit/schema-merging'
import { AccountsServer } from '@accounts/server'
import { AccountsPassword } from '@accounts/password'
import { AccountsModule } from '@accounts/graphql-api'
import { typeDefs } from "./models/typdefs"
import { resolvers } from "./models/resolvers"


const startserver = async () => {
  // mongo db connection
  await mongoose.connect("mongodb+srv://machina:Wildfirehtc1@cashflow.vkzwe.gcp.mongodb.net/Filmz?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  // accounts.js authentication system
  const accountsServer = new AccountsServer(
    {
      db: new Mongo(mongoose.connection),
      // Replace this value with a strong secret
      tokenSecret: 'Thetwelvefools'
    },
    {
      password: new AccountsPassword({})
    }
  )

  // We generate the accounts-js GraphQL module
  const accountsGraphQL = AccountsModule.forRoot({ accountsServer })

  // A new schema is created combining our schema and the accounts-js schema
  const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([typeDefs, accountsGraphQL.typeDefs]),
    resolvers: mergeResolvers([accountsGraphQL.resolvers, resolvers]),
    schemaDirectives: {
      ...accountsGraphQL.schemaDirectives
    }
  })

  const server = new ApolloServer({ schema, context: accountsGraphQL.context })

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}
startserver();
