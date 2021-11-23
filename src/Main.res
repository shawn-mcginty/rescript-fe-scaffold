let optRoot = Webapi.Dom.Document.getElementById("root", Webapi.Dom.document)

switch (optRoot) {
  | Some(root) =>
    ReactDOM.render(<React.StrictMode>
        <MainPage />
      </React.StrictMode>, root)
  | None => ()
}