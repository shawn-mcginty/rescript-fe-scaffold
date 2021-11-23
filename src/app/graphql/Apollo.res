let client = {
  open ApolloClient
  make(
    ~cache=Cache.InMemoryCache.make(),
    // turn this off in prod
    ~connectToDevTools=true,
    ~uri=_ => "http://localhost:8080/api/v1/graphql",
    ()
  )
}