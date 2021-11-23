let optRoot = Webapi.Dom.Document.getElementById(Webapi.Dom.document, "root")

switch (optRoot) {
  | Some(root) =>
    ReactDOM.render(<React.StrictMode>
        <MainPage />
      </React.StrictMode>, root)
  | None => ()
}