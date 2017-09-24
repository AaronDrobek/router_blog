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
    <Route path='/showpost' component={ShowPost}/>
    <Route path='/postlist' component={PostList}/>
    <Route path='/create' component={CreatePost}/>
    <Route path='/' component={App} />
    </BaseLayout>
</BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
