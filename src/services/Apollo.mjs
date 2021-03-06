// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Env from "./Env.mjs";
import * as ApolloClient from "rescript-apollo-client/src/ApolloClient.mjs";
import * as ApolloClient__Cache_InMemory_InMemoryCache from "rescript-apollo-client/src/@apollo/client/cache/inmemory/ApolloClient__Cache_InMemory_InMemoryCache.mjs";

var isDev = Env.nodeEnv === "development" ? true : false;

var client = ApolloClient.make((function (param) {
        return "http://localhost:8080/api/v1/graphql";
      }), undefined, undefined, undefined, ApolloClient__Cache_InMemory_InMemoryCache.make(undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, isDev, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

export {
  client ,
  
}
/* isDev Not a pure module */
