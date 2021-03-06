// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$Array from "rescript/lib/es6/array.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Apollo from "../services/Apollo.mjs";
import * as Client from "@apollo/client";
import * as ApolloClient__React_Hooks_UseQuery from "rescript-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.mjs";

var Raw = {};

var query = Client.gql(["query GetUsers  {\nusers  {\n__typename  \nid  \nfirst_name  \nitems  {\n__typename  \nlabel  \n}\n\n}\n\n}\n"]);

function parse(value) {
  var value$1 = value.users;
  return {
          users: value$1.map(function (value) {
                var value$1 = value.items;
                return {
                        __typename: value.__typename,
                        id: value.id,
                        first_name: value.first_name,
                        items: value$1.map(function (value) {
                              return {
                                      __typename: value.__typename,
                                      label: value.label
                                    };
                            })
                      };
              })
        };
}

function serialize(value) {
  var value$1 = value.users;
  var users = value$1.map(function (value) {
        var value$1 = value.items;
        var items = value$1.map(function (value) {
              var value$1 = value.label;
              var value$2 = value.__typename;
              return {
                      __typename: value$2,
                      label: value$1
                    };
            });
        var value$2 = value.first_name;
        var value$3 = value.id;
        var value$4 = value.__typename;
        return {
                __typename: value$4,
                id: value$3,
                first_name: value$2,
                items: items
              };
      });
  return {
          users: users
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var UsersQuery_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables
};

var include = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var UsersQuery_refetchQueryDescription = include.refetchQueryDescription;

var UsersQuery_use = include.use;

var UsersQuery_useLazy = include.useLazy;

var UsersQuery_useLazyWithVariables = include.useLazyWithVariables;

var UsersQuery = {
  UsersQuery_inner: UsersQuery_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  refetchQueryDescription: UsersQuery_refetchQueryDescription,
  use: UsersQuery_use,
  useLazy: UsersQuery_useLazy,
  useLazyWithVariables: UsersQuery_useLazyWithVariables
};

function UserList$UserWidget(Props) {
  var u = Props.u;
  return React.createElement("div", {
              className: "pb-3"
            }, React.createElement("p", {
                  className: "font-bold text-lg"
                }, u.first_name), React.createElement("ul", {
                  className: "text-xs ml-2"
                }, $$Array.mapi((function (i, item) {
                        return React.createElement("li", {
                                    key: String(i)
                                  }, "- " + item.label);
                      }), u.items)));
}

var UserWidget = {
  make: UserList$UserWidget
};

function UserList(Props) {
  var match = React.useState(function () {
        
      });
  var setErrMsg = match[1];
  var match$1 = React.useState(function () {
        return [];
      });
  var setUsers = match$1[1];
  var match$2 = React.useState(function () {
        return false;
      });
  var setLoading = match$2[1];
  React.useEffect((function () {
          Curry._1(setLoading, (function (param) {
                  return true;
                }));
          Curry._6(Apollo.client.rescript_query, {
                  query: query,
                  Raw: Raw,
                  parse: parse,
                  serialize: serialize,
                  serializeVariables: serializeVariables
                }, undefined, undefined, undefined, undefined, undefined).then(function (result) {
                Curry._1(setLoading, (function (param) {
                        return false;
                      }));
                if (result.TAG === /* Ok */0) {
                  var match = result._0;
                  var error = match.error;
                  var users = match.data.users;
                  if (error !== undefined) {
                    Curry._1(setErrMsg, (function (param) {
                            return error.message;
                          }));
                    return Promise.resolve(undefined);
                  } else {
                    Curry._1(setUsers, (function (param) {
                            return users;
                          }));
                    return Promise.resolve(undefined);
                  }
                }
                console.log("Error: ", result._0);
                return Promise.resolve(undefined);
              });
          
        }), []);
  if (match$2[0]) {
    return React.createElement("div", undefined, "Loading some users data...");
  } else if (match[0] !== undefined) {
    return React.createElement("div", undefined, "Something bad happened...");
  } else {
    return React.createElement("div", undefined, $$Array.mapi((function (i, u) {
                      return React.createElement(UserList$UserWidget, {
                                  u: u,
                                  key: String(i)
                                });
                    }), match$1[0]));
  }
}

var make = UserList;

export {
  UsersQuery ,
  UserWidget ,
  make ,
  
}
/* query Not a pure module */
