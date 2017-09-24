import React, {Component} from 'react';




export default class ShowPost extends Component{
  constructor(props){
    super(props);

      this.state={
        data: [],
      }


  }
    componentDidMount(){
      // const { id } = this.props.match.params;
      // const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

      fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
        return results.json();
      }).then(data => {
        this.setState({data: data});
        console.log(data, "this is data")
      })
    }







  render(){
      const singleBlog = this.props.match.params.hand
      console.log(this.props.match.params.hand, "this is singleBlog*************");
      let oneBlog = this.state.data.map((post) =>{
        console.log(post, "this is post data from show post all***********");
        if (post._id === singleBlog) {

        return(
          <div key={post._id}className="show_box">
            <h3>Author: {post.authorName}</h3>
            <h3>Title: {post.blogTitle}</h3>
            <h3>Post: {post.blogEntry}</h3>
          </div>
        )
      }

    })
    return(
      <div className="individual">
      {oneBlog}
      </div>
    )
  }
}
