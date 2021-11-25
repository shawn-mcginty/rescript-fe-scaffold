module UsersQuery = %graphql(`
  query GetUsers {
    users {
      id
      first_name
      items {
        label
      }
    }
  }
`)

module UserWidget = {
  @react.component
  let make = (~u: UsersQuery.t_users) => {
    <div className="pb-3">
      <p className="font-bold text-lg">{React.string(u.first_name)}</p>
      <ul className="text-xs ml-2">
        {
          u.items
          |> Array.mapi((i, item: UsersQuery.t_users_items) => <li key={Belt.Int.toString(i)}>{React.string("- " ++ item.label)}</li>)
          |> React.array
        }
      </ul>
    </div>
  }
}

type t__ok = ApolloClient__Core_ApolloClient.ApolloQueryResult.t__ok<UsersQuery.t>

@react.component
let make = () => {
  let (errMsg, setErrMsg) = React.useState(_ => None)
  let (users, setUsers) = React.useState(_ => [])
  let (loading, setLoading) = React.useState(_ => false)
  React.useEffect0(() => {
    setLoading(_ => true)
    let _ = Apollo.client.query(~query=module(UsersQuery), ())
      |> Js.Promise.then_((result: Belt.Result.t<t__ok, ApolloClient__Core_Types.ApolloError.t>) => {
        setLoading(_ => false)
        switch result {
        | Ok({error: Some(error)}) =>
          setErrMsg(_ => Some(error.message))
          Js.Promise.resolve()
        | Ok({data: {users}}) =>
          setUsers(_ => users)
          Js.Promise.resolve()
        | Error(error) => Js.log2("Error: ", error)
          Js.Promise.resolve()
        }
      })
    None
  })

  switch ((loading, users, errMsg)) {
  | (true, _, _) =>
    <div>{React.string("Loading some users data...")}</div>
  | (false, users, None) =>
    <div>{
      users
      |> Array.mapi((i, u: UsersQuery.t_users) => <UserWidget u=u key={Belt.Int.toString(i)} />)
      |> React.array
    }</div>
  | _ =>
    <div>{React.string("Something bad happened...")}</div>
  }
}
