import React from 'react';
import PostList from './PostList';
import AddPost from './AddPost';

class Posts extends React.Component {
  render(){
    return (
      <div>
        <h3> Posts for {this.props.username} </h3>
        <AddPost username={this.props.username} addPost={this.props.addPost} />
        <PostList username={this.props.username} posts={this.props.posts} />
      </div>
    )
  }
}

Posts.propTypes = {
  username: React.PropTypes.string.isRequired,
  posts: React.PropTypes.array.isRequired,
  addPost: React.PropTypes.func.isRequired,
}

export default Posts

