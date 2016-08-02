import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class PostList extends React.Component {
  render(){
    const { posts } = this.props;
    return (
      <CSSTransitionGroup transitionName="list__item-" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <ul className="list-group">
          {posts.map((post, index) => (
              <li className="list-group-item" key={index}>
                <p>{post.timestamp}</p>
                <p>{post.author} : {post.post}</p>
              </li>
          ))}
        </ul>
      </CSSTransitionGroup>
    )
  }
}

export default PostList