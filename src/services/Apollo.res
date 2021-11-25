let client = { 
  open ApolloClient
  let isDev = switch (Env.nodeEnv) {
    | Some("development") => true
    | _ => false
  }
  make(
    ~cache=Cache.InMemoryCache.make(),
    // turn this off in prod
    ~connectToDevTools=isDev,
    ~uri=_ => "http://localhost:8080/api/v1/graphql",
    (),
  )
}
