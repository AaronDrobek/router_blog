import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';






ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
    <Route path='/postlist/:hand' component={ShowPost}/>
    <Route path='/postlist' component={PostList}/>
    <Route path='/create' component={CreatePost}/>
    <Route exact path='/' component={App}/>
    </Switch>
    </BaseLayout>
</BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
