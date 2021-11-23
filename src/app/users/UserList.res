module UsersQuery = %graphql(`
  query UsersQuery {
    users {
      id
      first_name
      items {
        id
        label
      }
    }
  }
`)

@react.component
let make = () =>
  switch UsersQuery.use() {
    | {loading: true} => "Loading..." -> React.string
    | {error: Some(err)} =>
      Js.Console.error(err)
      React.string("Error loading data")
    | {data: Some({users})} =>
      <div>
        {"There are " -> React.string} {users -> Belt.Array.length -> React.int} {" users"->React.string}
      </div>
    | _ => React.string("Something is wrong")
  }