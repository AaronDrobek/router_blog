import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component{
  render(){
    return(
      <div className="base_box">
        <div className="base_content">
          <NavLink activeClassName="selected" to='/'>Home</NavLink>
          <NavLink activeClassName="selected" to='/create'>Create Post</NavLink>
          <NavLink activeClassName="selected" to='/postlist'>All Posts</NavLink>
        </div>
          {this.props.children}
      </div>
        )
      }
    }
