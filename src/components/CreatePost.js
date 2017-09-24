import React, {Component} from 'react';




export default class CreatePost extends Component{
  constructor(props){
    super(props);

    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleBlogChange=this.handleBlogChange.bind(this);
    this.handleEntryChange=this.handleEntryChange.bind(this);
    this.addToList=this.addToList.bind(this);

    this.state={
      authorName: '',
      blogTitle: '',
      blogEntry: '',
    };
  }
  handleNameChange(event){
    this.setState({authorName: event.target.value});
  }
  handleBlogChange(event){
    this.setState({blogTitle: event.target.value});
  }
  handleEntryChange(event){
    this.setState({blogEntry: event.target.value});
  }

  addToList = (event) => {
    event.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }

).then((response) => {
  return response.json()

})
  .then((result) => {
    this.setState({authorName:'', blogTitle:'', blogEntry:''});
  })

.catch(err => {
  console.log(err, "boo!");
});


};



  render(){
    return(
      <div className="create_box" >
        <div className="create_content" >
          <form onSubmit={this.addToList} >
            <h3>
              <label> Author:   </label>
              <input name="authorName" type="text" placeholder="Author" value={this.state.authorName} onChange={this.handleNameChange} />
            </h3>
              <hr/>
            <h3>
              <label> Title:   </label>
              <input name="blogTitle" type="text" placeholder="Title" value={this.state.blogTitle} onChange={this.handleBlogChange} />
            </h3>
              <hr/>
            <h3>
              <label> Blog Entry:   </label>
              <textarea name="blogEntry" type="text" placeholder="Blog" value={this.state.blogEntry} onChange={this.handleEntryChange} />
            </h3>
              <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
