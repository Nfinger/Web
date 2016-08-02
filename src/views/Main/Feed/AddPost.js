import React from 'react';

class AddPost extends React.Component {
  handleSubmit(){
    var newNote = this.post.value;
    this.post.value = '';
    if (newNote !== ''){
      this.props.addPost(newNote)
    }
  }
  setRef(ref){
    this.post = ref;
  }
  render(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="What's on your mind?" ref={(ref) => this.setRef(ref)}/>
        <span className='input-group-btn'>
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
        </span>
      </div>
    )
  }
}

AddPost.propTypes = {
  username: React.PropTypes.string.isRequired,
  addPost: React.PropTypes.func.isRequired
};

export default AddPost