import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./manager/store/configureStore";
import { Provider } from "react-redux";
import { getMoviesFromDatabase } from "./manager/actions/MovieAction";
// import { addMovie} from "./manager/actions/MovieAction";

const mystore = configureStore();

// mystore.dispatch(
//   addMovie({
//     image:
//       "https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/wonder-poster.jpg",
//     title: "Apotek",
//     price: "45",
//     rate: "6.5",
//   })
// );





const result = (
  <Provider store={mystore}>
      <App />
  </Provider>
)



ReactDOM.render(<img src="https://i.gifer.com/74H8.gif" alt=""/>, document.getElementById('root'));

mystore.dispatch(getMoviesFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})