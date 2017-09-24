import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';




export default class PostList extends Component{
  constructor(props){
    super(props);

    this.state={
      data: [],
    }
    this.fetchData=this.fetchData.bind(this);
  }


  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
          return results.json();
        }).then(data => {
          this.setState({data: data});
          console.log(data, "this is data")
        })
  }
  fetchData = (event) => {
      event.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger').then(results => {
        return results.json();
      }).then(data => {
        this.setState({data: data});
      });
    }
  render(){
    let match = this.props.match;
    let blogPost = this.state.data.map((blog) =>{
      console.log(blog, "this is blog data from PostList map");

      return(
        <NavLink className="post_list" to={`${match.url}/${blog._id}`}><h1 key={blog._id}>{blog.blogTitle}</h1>
        </NavLink>

      )
    })
    return(
      <div className="post_box" >
      <div className="post_content">
        <h2>Blog Titles:</h2>
        {blogPost}

      </div>
      </div>
    )
  }
}
