import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import * as serviceWorker from './serviceWorker';

const toDos = ["Roast a baby llama", "Get BBQ sauce", "Twerk to make it WERK", "Have a Pokémon Battle with Adam", "Make 10 Cheese Crispy Gooey Ooey MACnCheese with all the BACON bits and yummies of the world!"]

ReactDOM.render(
  <React.StrictMode>
    <MyList theList={toDos} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
