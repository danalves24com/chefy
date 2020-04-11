import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Prompt from './Elements/Prompt'
import Home from './Elements/Home'
import Book from './Elements/Book'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
    <div>
      <aside>
        <Link to={`/`}></Link>
        <Link to={`/select`}></Link>
        <Link to={`/browse`}></Link>

      </aside>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/select" component={Prompt} />
        <Route path="/browse" component={Book} />

      </main>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
