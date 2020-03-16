import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

    let posts = [
    { id: 1, messages: "Hi, How are you", countLike: 23 },
    { id: 2, messages: "It's my first post on React!", countLike: 48 }
    ];
    let dialogs = [
    { id: 1, name: "Shohruh" },
    { id: 2, name: "Alisher" },
    { id: 3, name: "Jovlon" },
    { id: 4, name: "Humoyun" },
    { id: 5, name: "Suxrob" }
    ];
    let messages = [
    { id: 1, message: "Salom" },
    { id: 2, message: "Ishlar yaxwimi" },
    { id: 3, message: "yaxwi raxmat!!!" }
    ];
    let musicNames = [
        {id: 1, musicname: "Waka-waka"},
        {id: 2, musicname: "Ring my bell"},
        {id: 3, musicname: "I love dance"},
        {id: 4, musicname: "Muomila"}
      ]
      let musicAuthor = [
          {author: "Shakira"},
          {author: "Enrique"},
          {author: "Stromare"},
          {author: "Massa"}
      ]
ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} musicNames={musicNames} musicAuthor={musicAuthor}/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
