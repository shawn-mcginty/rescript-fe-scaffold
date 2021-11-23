@react.component
let make = () => {
  <ApolloClient.React.ApolloProvider client=Apollo.client>
    <div>
      <div>{React.string("Hello world")}</div>
      <UserList />
    </div>
  </ApolloClient.React.ApolloProvider>
}