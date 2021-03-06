import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Prompt from './Elements/Prompt'
import Home from './Elements/Home'
import Book from './Elements/Book'
import Header from './Elements/Header'
import Summ from './Elements/cookbook'
import Abt from './Elements/About'
import Contribute from './Elements/Contribute'
import Share from './Elements/Share'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
<app>
<Header></Header>
<Router>
    <div>
      <aside>
        <Link to={`/`}></Link>
        <Link to={`/select`}></Link>
        <Link to={`/browse`}></Link>

      </aside>
      <main id="mid">
      
        <Route exact path="/" component={Home} />
        <Route path="/select" component={Prompt} />
        <Route path="/browse" component={Book} />
        <Route path="/book" component={Summ} />
        <Route path="/about" component={Abt} />
        <Route path="/contribute" component={Contribute} />
        <Route path="/share" component={Share} />


      </main>
    </div>
  </Router>
</app>,
  document.getElementById('root')
);
serviceWorker.unregister();
