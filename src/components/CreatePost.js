import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';




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
  .then(() =>{
  this.props.history.push('/postlist');
  })
  // .then((result) => {
  //   this.setState({authorName:'', blogTitle:'', blogEntry:''});
  // })

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
              <label> User Name: </label>
                <br/>
                <input className="input" name="name" type="text"  value={this.state.authorName} onChange={this.handleNameChange} />
            </h3>
              <hr/>
                <h3>
                  <label> Title:   </label>
                    <br/>
                    <input className="input" name="title" type="text"  value={this.state.blogTitle} onChange={this.handleBlogChange} />
                </h3>
                  <hr/>
                    <h3>
                    <label> Blog Entry:   </label>
                      <br/>
                      <textarea rows="2" columns="6" className="input_text" name="blog" type="text" placeholder="Blog About It" value={this.state.blogEntry} onChange={this.handleEntryChange} />
                    </h3>

                      <button className="button" type="submit"><Link to='/postlist'>Submit</Link></button>

          </form>
        </div>
      </div>
    )
  }
}
